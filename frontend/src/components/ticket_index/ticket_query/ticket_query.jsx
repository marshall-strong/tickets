import React from 'react';
import { withRouter } from 'react-router-dom';
import PriorityFilter from './priority_filter';
import OwnerFilter from './owner_filter';
import StatusFilter from './status_filter';
import SubscribedFilter from './subscribed_filter';
import CreatorFilter from './creator_filter';
import TagsFilter from './tags_filter';

const TicketQuery = ({ history, location }) => {

    const params = new URLSearchParams(location.search.slice(1));

    const handleSubmit = e => {
        e.preventDefault();
        let queryString = params.toString();
        history.push(`/tickets/?${queryString}`)
    };

    return(
        <div className="query-container">
            <div className="filters">
                <OwnerFilter params={params} />
                <CreatorFilter params={params} />
                <SubscribedFilter params={params} />
                <TagsFilter params={params} />
                <StatusFilter params={params}/>
                <PriorityFilter params={params} />
            </div>
            <button 
                className="button1 search"
                onClick={(e) => handleSubmit(e)}
            >Search</button>
        </div>
    );
};

export default withRouter(TicketQuery);