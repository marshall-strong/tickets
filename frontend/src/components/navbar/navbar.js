import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../app.css";
import "./navbar.css";
import UserSearchContainer from "./user_search_container";
import { getQueryString } from "../../util/params_util";
import { getOrgTags } from "../../actions/tag_actions";
import { connect } from "react-redux";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.writeTicket = this.writeTicket.bind(this);
    this.receiveUserLogout = this.receiveUserLogout.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getOrgUsers(this.props.currentUser.orgHandle);
      this.props.getOrgTags(this.props.currentUser.orgHandle);
    }
  }

  receiveUserLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  writeTicket(e) {
    e.preventDefault();
    this.props.history.push("/tickets/new");
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    let { currentUser } = this.props;
    if (currentUser) {
      return (
        <div className="header">
          <div className="nav">
            <Link
              className="link-style-header"
              to={`/tickets/search?${getQueryString("owner", currentUser._id)}`}
            >
              {" "}
              Tickets
            </Link>
            <UserSearchContainer />
            <div className="right-nav">
              <button className="btn1 new-ticket" onClick={this.writeTicket}>
                + New Ticket
              </button>
              <button
                className="btn1 own-profile-button"
                onClick={(e) =>
                  this.props.history.push(`/users/${currentUser._id}`)
                }
              >
                <div className="avitar">
                  {currentUser.firstName.slice(0, 1)}
                  {currentUser.lastName.slice(0, 1)}
                </div>
                {currentUser.firstName} {currentUser.lastName}
              </button>
              <button className="btn1 logout" onClick={this.receiveUserLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="nav">
            <div className="left-nav">Tickets</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="header-container">{this.getLinks()}</div>;
  }
}

const mdp = (dispatch) => ({
  getOrgTags: (orgHandle) => dispatch(getOrgTags(orgHandle)),
});

export default withRouter(connect(null, mdp)(NavBar));
