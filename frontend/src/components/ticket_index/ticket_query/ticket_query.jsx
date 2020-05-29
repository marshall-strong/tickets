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
import { getOrgTags } from '../../../actions/tag_actions';
import { createFolder } from '../../../actions/folder_actions';

class TicketQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: new URLSearchParams(this.props.location.search.slice(1)),
            users: '',
            tags: '',
            saveFolder: false,
            folderName: ''
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        let queryString = this.state.params.toString();
        this.props.history.push(`/tickets/search?${queryString}`)
    };

    handleSave(e) {
        e.preventDefault();
        const { currentUser, createFolder } = this.props;
        const queryString = this.state.params.toString();
        const folder = { creator: currentUser._id, queryString: queryString, name: this.state.folderName }
        this.props.createFolder(folder)
        .then(() => this.setState({ saveFolder: false, folderName: '' }))
    }

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
        const { users, tags, params, saveFolder } = this.state;
        if (this.loading || !tags || !users) return null;
        return(
            <div className="query-container">
                {saveFolder ? 
                <div className="save-folder">
                    <div className="save-folder-background-modal" onClick={e => this.setState({ saveFolder: false }) }>c</div>
                    <div className="save-folder-form-container">
                        <div className="folder-name-label">Folder Name</div>
                        <input 
                            type="text" 
                            value={this.state.folderName} 
                            onChange={e => this.setState({folderName: e.currentTarget.value})}
                        />
                        <button
                            className="btn1 search"
                            onClick={e => this.handleSave(e)}
                        >Save</button>
                    </div>
                </div> : null}
                <div className="filters">
                    <OwnerFilter users={users} params={params} />
                    <CreatorFilter users={users} params={params} />
                    <SubscribedFilter users={users} params={params} />
                    <TagsFilter tags={tags} params={params} />
                    <StatusFilter params={params}/>
                    <PriorityFilter params={params} />
                </div>
                <div className="query-buttons">
                    <button 
                        className="btn1 search"
                        onClick={(e) => this.handleSubmit(e)}
                    >Search</button>
                    <button 
                        className="btn1 search"
                        onClick={(e) => this.setState({ saveFolder: true })}
                    >Save Search</button>
                </div>
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
    createFolder: folder => dispatch(createFolder(folder))
})

export default withRouter(connect(msp, mdp)(TicketQuery));