import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';

class SubscribedFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('subscribedInclusion')) {
            this.props.params.set('subscribedInclusion', 'all');
        };
        this.state = {
            inclusion: this.props.params.get('subscribedInclusion'),
            added: {},
        };
        this.props.params.getAll('subscribed').forEach(id =>
            this.state.added[id] = this.props.users[id]
        );
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    };

    updateInclusion(e) {
        this.props.params.set('subscribedInclusion', e.target.value);
        this.setState({ inclusion: e.target.value });
    };

    add(suggestion) {
        // eslint-disable-next-line
        this.state.added[suggestion._id] = suggestion;
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    updateParams() {
        this.props.params.delete('subscribed');
        Object.keys(this.state.added).forEach(id =>
            this.props.params.append('subscribed', id)
        );
    };

    onSuggestionSelected(e, { suggestion }) {
        this.add(suggestion);
    }

    renderAdded() {
        return Object.values(this.state.added).map(user =>
            <div key={user._id} className="added-item">
                {user.firstName} {user.lastName}
                <span className="remove" onClick={() => this.remove(user._id)}> X</span>
            </div>
        );
    };

    render() {
        return (
            <div className="filter subscribed">
                <div className="title">
                    Subscribed has
                </div>
                <div className="option">
                    <select
                        defaultValue={this.state.inclusion}
                        className="inclusion-select"
                        onChange={(e) => this.updateInclusion(e)}
                    >
                        <option
                            value="all"
                        >
                            all
                        </option>
                        <option
                            value="any"
                        >
                            any
                        </option>
                        <option
                            value="none"
                        >
                            none
                        </option>
                    </select>
                </div>
                <div className="title">
                    of
                </div>
                <div className="added">
                    {this.renderAdded()}
                </div>
                <UserSuggest 
                    onSuggestionSelected={this.onSuggestionSelected}
                />
            </div>
        );
    };
};

export default SubscribedFilter;