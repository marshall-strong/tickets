import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';

class CreatorFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('creatorInclusion')) {
            this.props.params.set('creatorInclusion', 'is');
        };
        this.state = {
            inclusion: this.props.params.get('creatorInclusion'),
            added: {},
        };
        this.props.params.getAll('creator').forEach(id =>
            this.state.added[id] = this.props.users[id]
        );
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    };

    updateInclusion(e) {
        this.props.params.set('creatorInclusion', e.target.value);
        this.setState({ inclusion: e.target.value });
    };

    add(suggestion) {
        // eslint-disable-next-line
        this.state.added[suggestion._id] = suggestion;
        this.updateParams();
        this.setState({ added: this.state.added});
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    updateParams() {
        this.props.params.delete('creator');
        Object.keys(this.state.added).forEach(id =>
            this.props.params.append('creator', id)
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
            <div className="filter creator">
                <div className="title">
                    Creator
                </div>
                <div className="option">
                    <select
                        defaultValue={this.state.inclusion}
                        className="inclusion-select"
                        onChange={(e) => this.updateInclusion(e)}
                    >
                        <option
                            value="is"
                        >
                            is
                        </option>
                        <option
                            value="not"
                        >
                            not
                        </option>
                    </select>
                </div>
                <div className="title">
                    in
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

export default CreatorFilter;