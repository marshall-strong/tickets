import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { getOrgUsers } from '../../../actions/user_actions';
import './autosuggest.css'


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, people) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('\\b' + escapedValue, 'i');

    return people.filter(person => regex.test(getSuggestionValue(person)));
}

function getSuggestionValue(suggestion) {
    return `${suggestion.firstName} ${suggestion.lastName}`;
}

function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.firstName} ${suggestion.lastName}`;
    return (
        <span className={suggestion._id}>
            <span className="name">
                <span className={'suggestion-text'} key={suggestionText}>{suggestionText}</span>
            </span>
        </span>
    );
}

class OwnerInput extends React.Component {
    constructor(props) {
        super(props);
        // let owner = this.props.owner?
        const { owner } = this.props;
        this.state = {
            value: owner.firstName + ' ' + owner.lastName,
            suggestions: [],
            people: this.props.users
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionSelected = (e, { suggestion }) => {
        this.props.updateFromSuggestion('owner', suggestion, e)
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.state.people)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    };

    componentDidMount() {
        this.props.getOrgUsers(this.props.currentUser.orgHandle)
        .then(() => this.setState({ people: this.props.users }))
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type a name",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionSelected={this.onSuggestionSelected}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} 
            />
        );
    };
};

const msp = state => ({
    users: Object.values(state.entities.users)
});

const mdp = dispatch => ({
    getOrgUsers: (orgHandle) => dispatch(getOrgUsers(orgHandle))
});

export default connect(msp, mdp)(OwnerInput);