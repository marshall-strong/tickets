import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';

class Owner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { owner: this.props.owner };
    };

    onSuggestionSelected(e, { suggestion }) {
        this.setState(suggestion)
        this.props.updateFromSuggestion('owner', suggestion, e.target, e);
    };

    render() {
        const { currentUser } = this.props;
        const { owner } = this.state;
        return(
            <div className="owner">
                <div>
                    {owner.firstName} {owner.lastName}
                </div>
                <UserSuggest 
                    onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                    value={owner || currentUser}
                />
            </div>
        );
    };
};

export default Owner;