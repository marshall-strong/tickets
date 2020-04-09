import React from "react";
import { IoMdSearch } from 'react-icons/io'

class UserSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userParams: new URLSearchParams()
        };

    };

    update(field) {
        return e => {
            this.state.userParams.set(field, e.target.value);
            this.setState({ userParams: this.state.userParams })
        };
    };

    handleSearch(e) {
        e.preventDefault();
        let userQueryString = this.state.userParams.toString()
        this.props.history.push(`${this.props.currentUser.orgHandle}/users/?${userQueryString}`)
    }

    render() {
        const { userParams } = this.state
        return (
            <div className="user-search-container">
                <input
                    type="text"
                    placeholder="Search for User"
                    onChange={this.update('nameFragment')}
                    value={userParams.get('nameFragment')}
                />
                <button
                    onClick={(e) => this.handleSearch(e)} 
                    className="button1">
                    <IoMdSearch />
                </button>
            </div>
        )
    }

}

export default UserSearch
