import React from 'react';
import { withRouter } from 'react-router-dom';
import PriorityFilter from './priority_filter';
import OwnerFilter from './owner_filter';
import StatusFilter from './status_filter';
import SubscribedFilter from './subscribed_filter';
import CreatorFilter from './creator_filter';
import TagsFilter from './tags_filter';
import { getOrgUsers } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { getOrgTags } from '../../../actions/tag_actions'

class TicketQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: new URLSearchParams(this.props.location.search.slice(1)),
            users: '',
            tags: '',
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        let queryString = this.state.params.toString();
        this.props.history.push(`/tickets/search?${queryString}`)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            let params = new URLSearchParams(this.props.location.search.slice(1));
            this.loading = true;
            this.setState({ params: params }, () => {
                this.loading = false;
                this.setState({ params: params });
            })
        };
    };

    componentDidMount() {
        const { currentUser, getOrgUsers, getOrgTags } = this.props;
        getOrgTags(currentUser.orgHandle).then(action => {
            this.setState({ tags: action.payload })
        });
        getOrgUsers(currentUser.orgHandle).then(action => {
            this.setState({ users: action.payload })
        });
    };

    render() {
        const { users, tags, params } = this.state;
        if (this.loading || !tags || !users) return null;
        return(
            <div className="query-container">
                <div className="filters">
                    <OwnerFilter users={users} params={params} />
                    <CreatorFilter users={users} params={params} />
                    <SubscribedFilter users={users} params={params} />
                    <TagsFilter tags={tags} params={params} />
                    <StatusFilter params={params}/>
                    <PriorityFilter params={params} />
                </div>
                <button 
                    className="btn1 search"
                    onClick={(e) => this.handleSubmit(e)}
                >Search</button>
            </div>

        );
    };
};

const msp = state => ({
    currentUser: state.entities.users[state.session._id],
    users: state.entities.users,
    tags: state.entities.tags,
})

const mdp = dispatch => ({
    getOrgUsers: orgHandle => dispatch(getOrgUsers(orgHandle)),
    getOrgTags: orgHandle => dispatch(getOrgTags(orgHandle)),
})

export default withRouter(connect(msp, mdp)(TicketQuery));