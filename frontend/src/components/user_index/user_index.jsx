import React from 'react';
import { withRouter } from 'react-router-dom';
import UserIndexItem from './user_index_item';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let queryString = this.props.location.search
    let params = new URLSearchParams(queryString)
    let nameFragment = params.get('namefragment')
    let currentUser = this.props.currentUser.orgHandle
    this.props.getOrgUsersByHandleAndNameFragment(currentUser, nameFragment)
  }


  render() {
    if (!this.props.users) return null
    if (!this.props.location.search) return null

    return (
      <div>
        <p></p>
        <UserIndexItem
          users={this.props.users}
        />
      </div>
    )
  }
}


export default withRouter(UserIndex) 