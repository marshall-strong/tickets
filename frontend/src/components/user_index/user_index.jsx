import React from 'react';
import { withRouter } from 'react-router-dom';
import UserIndexItem from './user_index_item';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ''
    };
  };

  componentDidMount() {
    let queryString = this.props.location.search;
    let org = this.props.currentUser.orgHandle;
    let params = new URLSearchParams(queryString);
    params.set('orgHandle', org);
    let orgHandle = params.get('orgHandle');
    let nameFragment = params.get('nameFragment');
    this.props.getUsersByOrgHandleAndNameFragment(orgHandle, nameFragment)
    .then((action => {
      this.setState({ users: Object.values(action.payload) })
    }))
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let queryString = this.props.location.search;
      let org = this.props.currentUser.orgHandle;
      let params = new URLSearchParams(queryString);
      params.set('orgHandle', org);
      let orgHandle = params.get('orgHandle');
      let nameFragment = params.get('nameFragment');
      this.props.getUsersByOrgHandleAndNameFragment(orgHandle, nameFragment)
      .then((action => {
        if (action.payload) {
          this.setState({ users: Object.values(action.payload) })
        }
      }))
    }
  }

  render() {
    const { users } = this.state;
    if (!users) return null;

    return (
      <div>
        <p>User Index</p>
        <UserIndexItem
          users={users}
        />
      </div>
    );
  };
};

export default withRouter(UserIndex);