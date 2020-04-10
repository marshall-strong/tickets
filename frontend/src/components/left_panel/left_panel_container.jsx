import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './left_panel.css'

const LeftPanel = ({ userId }) => {

    
    const getQueryString = type => {
        let params = new URLSearchParams();
        let priorities = ['low', 'medium', 'high', 'catastrophic'];
        let statuses = ['no progress', 'planned', 'in progress', 'blocked'];
        priorities.forEach(pri => params.append('priority', pri));
        statuses.forEach(status => params.append('status', status));
        params.set(type, userId)
        if (type === 'subscribed') {
            params.set(`${type}Inclusion`, 'all');
        } else {
            params.set(`${type}Inclusion`, 'is');
        }
        return params.toString();
    };

    return (
        <div className="left-panel-container">
            <h1 className="folders">Folders</h1>
            <Link to={`/tickets/owner/${userId}`}>Owner</Link>
            <Link to={`/tickets/search/?${getQueryString('subscribed')}`}>Subscribed</Link>
            <Link to={`/tickets/search/?${getQueryString('creator')}`}>Creator</Link>
            <Link to={`/tickets/starred/${userId}`}>Starred</Link>
        </div>
    );
};

const msp = state => ({
    userId: state.session._id
})

const LeftPanelContainer = connect(msp, null)(LeftPanel);
export default LeftPanelContainer;