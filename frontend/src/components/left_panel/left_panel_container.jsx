import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './left_panel.css';

const LeftPanel = ({ userId }) => {

    const getQueryString = type => {
        let params = new URLSearchParams();
        let priorities = ['low', 'medium', 'high', 'catastrophic'];
        let statuses = ['no progress', 'planned', 'in progress', 'blocked'];
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

    const handleClick = e => {
        let selected = document.getElementsByClassName('selected');
        for (let i = 0; i < selected.length; i++) {
            selected[i].classList.add('unselected');
        };
        for (let i = 0; i < selected.length; i++) {
            selected[0].classList.remove('selected');
        };
        e.target.classList.add('selected');
    }

    return (
        <div className="left-panel-container">
            <h1 className="folders">Folders</h1>
            <Link className="unselected" onClick={(e) => handleClick(e)} to={`/tickets/owner/${userId}`}>Owner</Link>
            <Link className="unselected" onClick={(e) => handleClick(e)} to={`/tickets/search?${getQueryString('subscribed')}`}>Subscribed</Link>
            <Link className="unselected" onClick={(e) => handleClick(e)} to={`/tickets/search?${getQueryString('creator')}`}>Creator</Link>
            <Link className="unselected" onClick={(e) => handleClick(e)} to={`/tickets/starred/${userId}`}>Starred</Link>
        </div>
    );
};

const msp = state => ({
    userId: state.session._id
});

const LeftPanelContainer = connect(msp, null)(LeftPanel);
export default LeftPanelContainer;