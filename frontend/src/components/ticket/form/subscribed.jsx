import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';
import './subscribed.css';
import { Link } from 'react-router-dom';

class Subscribed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: {}
        };
        this.props.subscribed.forEach(subscriber => 
            // eslint-disable-next-line
            this.state.added[subscriber._id] = subscriber
        );
    };

    add(user) {
        // eslint-disable-next-line
        this.state.added[user._id] = user;
        this.setState({ added: this.state.added });
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.setState({ added: this.state.added });
        this.props.updateFromSuggestion(
            'subscribed',
            Object.values(this.state.added),
            document.getElementById('subscribed-container'),
        );
    };

    onSuggestionSelected = (e, { suggestion }) => {
        this.add(suggestion)
        this.props.updateFromSuggestion(
            'subscribed', 
            Object.values(this.state.added),
            document.getElementById('subscribed-container'),
            e,
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(user =>
            <div key={user._id} className="added-item">
                <Link className="subscribed-link" to={`/users/${user._id}`}>{user.firstName} {user.lastName}</Link>
                <span className="remove" onClick={() => this.remove(user._id)}> x</span>
            </div>
        );
    };

    render() {
        return (
            <div id="subscribed-container" className="subscribed-container">
                    <span className="added">
                        {this.renderAdded()}
                    </span>
                    <UserSuggest 
                        onSuggestionSelected={this.onSuggestionSelected}
                    />
            </div>
        );
    };
};

export default Subscribed;