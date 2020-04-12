import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';

const Owner = ({ owner, currentUser, updateFromSuggestion }) => {

    const onSuggestionSelected = (e, { suggestion }) => {
        updateFromSuggestion('owner', suggestion, e.target, e);
    };

    return(
        <UserSuggest 
            onSuggestionSelected={onSuggestionSelected}
            value={owner || currentUser}
        />
    );
};

export default Owner;