import {
  createTicket,
  getTicket,
  updateTicket,
} from "../../actions/ticket_actions";
import { connect } from "react-redux";
import Ticket from "./ticket";
import { withRouter } from "react-router-dom";
import { fetchTicketComments } from "../../actions/comment_actions";
import {
  updateUser,
  getOneUser,
  getOrgUsers,
} from "../../actions/user_actions";
import { clearTicketErrors } from "../../actions/ticket_actions";
import { getOrgTags, createTag } from "../../actions/tag_actions";

const msp = (state, ownProps) => {
  return {
    ticketId: ownProps.match.params.ticketId,
    ticket: state.entities.tickets[ownProps.match.params.ticketId],
    currentUser: state.entities.users[state.session._id],
    errors: state.errors.tickets,
  };
};

const mdp = (dispatch) => ({
  createTicket: (ticket) => dispatch(createTicket(ticket)),
  getTicket: (id) => dispatch(getTicket(id)),
  updateTicket: (ticket) => dispatch(updateTicket(ticket)),
  clearTicketErrors: () => dispatch(clearTicketErrors()),
  getOneUser: (userId) => dispatch(getOneUser(userId)),
  getOrgUsers: (orgHandle) => dispatch(getOrgUsers(orgHandle)),
  updateUser: (user) => dispatch(updateUser(user)),
  getOrgTags: (orgHandle) => dispatch(getOrgTags(orgHandle)),
  createTag: (tag) => dispatch(createTag(tag)),
  fetchTicketComments: (id) => dispatch(fetchTicketComments(id)),
});

const TicketFormContainer = withRouter(connect(msp, mdp)(Ticket));

export default TicketFormContainer;
