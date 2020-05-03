import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './left_panel.css';

const getQueryString = (type, userId) => {
    let params = new URLSearchParams();
    let priorities = ['Low', 'Medium', 'High', 'CATastrophic'];
    let statuses = ['No Progress', 'Planned', 'In Progress', 'Blocked'];
    priorities.forEach(pri => params.append('priority', pri));
    statuses.forEach(status => params.append('status', status));
    params.set(type, userId);
    if (type === 'subscribed') {
        params.set(`${type}Inclusion`, 'all');
    } else {
        params.set(`${type}Inclusion`, 'is');
    };
    return params.toString();
};

const LeftPanel = ({ userId, location }) => {

    const currentString = location.search.slice(1) || location.pathname
    const ownerString = getQueryString('owner', userId)
    const subscribedString = getQueryString('subscribed', userId)
    const creatorString = getQueryString('creator', userId)
    const starredPath = `/tickets/starred/${userId}`

    return (
        <div className="left-panel-container">
            <h1 className="folders">Folders</h1>
            <Link className={`owner-folder ${currentString === ownerString ? 'selected' : 'unselected'}`} to={`/tickets/search?${ownerString}`}>Owner</Link>
            <Link className={`subscribed-folder ${currentString === subscribedString ? 'selected' : 'unselected'}`} to={`/tickets/search?${subscribedString}`}>Subscribed</Link>
            <Link className={`${currentString === creatorString ? 'selected' : 'unselected'}`} to={`/tickets/search?${creatorString}`}>Creator</Link>
            <Link className={`starred-folder ${currentString === starredPath ? 'selected' : 'unselected'}`} to={`${starredPath}`}>Starred</Link>
        </div>
    );
};

const msp = state => ({
    userId: state.session._id
});

const LeftPanelContainer = connect(msp, null)(LeftPanel);
export default withRouter(LeftPanelContainer);