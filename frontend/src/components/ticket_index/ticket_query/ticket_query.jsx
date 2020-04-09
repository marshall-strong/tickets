import React from 'react';
import { withRouter } from 'react-router-dom';
import PriorityFilter from './priority_filter';

const TicketQuery = ({ history, location }) => {

    const params = new URLSearchParams(location.search);
    
    const handleSubmit = e => {
        e.preventDefault();
        let queryString = params.toString();
        history.push(`/tickets/?${queryString}`)
    };

    return(
        <div className="query-container">
            <div className="filters">
                <PriorityFilter 
                    params={params}
                    url={history.url}
                />
            </div>
            <button 
                className="button1"
                onClick={(e) => handleSubmit(e)}
            >Search</button>
        </div>
    );
};

export default withRouter(TicketQuery);