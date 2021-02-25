import { connect } from "react-redux";
import {
  createComment,
  clearCommentErrors,
} from "../../../../actions/comment_actions";
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";
import { updateTicket } from "../../../../actions/ticket_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session._id],
  ticketId: ownProps.match.params.ticketId,
  ticket: state.entities.tickets[ownProps.match.params.ticketId],
  comments: Object.values(state.entities.comments),
  errors: state.errors.comments,
});

const mDTP = (dispatch) => ({
  action: (comment) => dispatch(createComment(comment)),
  updateTicket: (ticket) => dispatch(updateTicket(ticket)),
  clearCommentErrors: () => dispatch(clearCommentErrors()),
});

export default withRouter(connect(mSTP, mDTP)(CommentForm));
