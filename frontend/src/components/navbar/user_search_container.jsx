import { connect } from "react-redux";
import UserSearch from "./user_search";
import { getOrgUsersByHandle } from "../../actions/organization_actions";
import { withRouter } from "react-router-dom";

const mstp = (state) => ({
  currentUser: state.entities.users[state.session._id],
});

const mdtp = (dispatch) => ({
  getOrgUsersByHandle: (orgHandle) => dispatch(getOrgUsersByHandle(orgHandle)),
});

export default withRouter(connect(mstp, mdtp)(UserSearch));
