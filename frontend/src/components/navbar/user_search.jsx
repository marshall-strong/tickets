import React from "react";
import { IoMdSearch } from 'react-icons/io'
import UserSuggest from "../autosuggest/user_suggest";
import { withRouter } from "react-router-dom";

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userParams: new URLSearchParams(),
            searchParams: new URLSearchParams(this.props.location.search),
            loading: false
        };
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
        this.addUpdateListener();

    };

    update(field, value) {
        this.state.userParams.set(field, value);
        this.setState({ userParams: this.state.userParams })
    };

    addUpdateListener() {
        setTimeout(
            () => {
                let search = document.getElementById('user-search')
                const input = search.firstElementChild.firstElementChild;
                input.addEventListener('change', () => {
                    this.update('nameFragment', input.value)
                })
            }, 100
        )
    }

    handleSearch(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.selected) {
            this.selected = false;
            return null
        };
        let userQueryString = this.state.userParams.toString();
        this.props.history.push(`/users/search/?${userQueryString}`);
    };

    onSuggestionSelected(e, { suggestion }) {
        this.props.history.push(`/users/${suggestion._id}`)
        e.stopPropagation();
        this.selected = true;
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.setState(
                { searchParams: new URLSearchParams(this.props.location.search)}            
            )
        }
    }

    render() {
        return (
            <form id="user-search" className="user-search-container">
                <UserSuggest 
                    onSuggestionSelected={this.onSuggestionSelected}
                    value={this.state.searchParams.get('nameFragment')}
                />
                <button
                    onClick={(e) => this.handleSearch(e)}
                    className="btn1">
                    <IoMdSearch />
                </button>
            </form>
        );
    };

};

export default withRouter(UserSearch);
