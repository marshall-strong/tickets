import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';

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
        
    };

    onSuggestionSelected = (e, { suggestion }) => {
        this.add(suggestion)
        this.props.updateFromSuggestion(
            'subscribed', 
            Object.values(this.state.added),
            e,
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(user =>
            <div className="added-item">
                {user.firstName} {user.lastName}
                <span className="remove" onClick={() => this.remove(user._id)}> x</span>
            </div>
        );
    };

    render() {
        return (
            <div className="subscribed-container">
                    <span className="added">
                        {this.renderAdded()}
                    </span>
                    <span>
                        <UserSuggest 
                            onSuggestionSelected={this.onSuggestionSelected}
                        />
                    </span>
            </div>
        );
    };
};

export default Subscribed;