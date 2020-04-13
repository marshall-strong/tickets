import React from 'react';
import { withRouter } from 'react-router-dom';
import PriorityFilter from './priority_filter';
import OwnerFilter from './owner_filter';
import StatusFilter from './status_filter';
import SubscribedFilter from './subscribed_filter';
import CreatorFilter from './creator_filter';
import TagsFilter from './tags_filter';

// const TicketQuery = ({ history, location }) => {
class TicketQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: new URLSearchParams(this.props.location.search.slice(1))
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

    render() {
        if (this.loading) return null;
        return(
            <div className="query-container">
                <div className="filters">
                    <OwnerFilter params={this.state.params} />
                    <CreatorFilter params={this.state.params} />
                    <SubscribedFilter params={this.state.params} />
                    <TagsFilter params={this.state.params} />
                    <StatusFilter params={this.state.params}/>
                    <PriorityFilter params={this.state.params} />
                </div>
                <button 
                    className="btn1 search"
                    onClick={(e) => this.handleSubmit(e)}
                >Search</button>
            </div>
        );
    };
};

export default withRouter(TicketQuery);