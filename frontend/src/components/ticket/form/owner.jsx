import React from 'react';
import UserSuggest from '../../autosuggest/user_suggest';
import './owner.css';


class Owner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            owner: this.props.owner,
            clicked: false,
        };
    };

    onSuggestionSelected(e, { suggestion }) {
        let target = document.getElementById("owner-div")
        this.setState(
            { owner: suggestion, clicked: false }, 
            () => target.classList.add('edited')
        )
        this.props.updateFromSuggestion(
            'owner', 
            suggestion, 
            target,
            e
        );
    };

    handleClick(e) {
        let edited = e.target.classList.contains('edited');
        this.setState(
            { clicked: !this.state.clicked }, 
            // (e) => edited ? e.target.classList.add('edited') : null
        );
    }

    render() {
        const { currentUser } = this.props;
        const { owner, clicked } = this.state;
        return(
            <div 
                className={`owner ${this.state.clicked}`} 
            >
                <div id="owner-div" className="owner-name" onClick={(e) => this.handleClick(e)}>
                    {owner.firstName} {owner.lastName} 
                    <div className={`${clicked} arrow`}>{'▴'}</div>
                </div>

                {this.state.clicked ?
                    <UserSuggest 
                        onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                        value={owner || currentUser}
                    /> : null
                }
            </div>
        );
    };
};

export default Owner;