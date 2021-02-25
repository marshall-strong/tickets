import { connect } from "react-redux";
import UserIndex from "./user_index";
import { getUsersByOrgHandleAndNameFragment } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
  searchParams: ownProps.match.params.searchParams,
  currentUser: state.entities.users[state.session._id],
});

const mDTP = (dispatch) => ({
  getUsersByOrgHandleAndNameFragment: (orgHandle, nameFragment) =>
    dispatch(getUsersByOrgHandleAndNameFragment(orgHandle, nameFragment)),
});

export default withRouter(connect(mSTP, mDTP)(UserIndex));
