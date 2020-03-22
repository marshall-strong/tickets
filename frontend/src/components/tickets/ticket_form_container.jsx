import { createTicket, getTicket, updateTicket } from "../../actions/ticket_actions";
import { getOrgUsers } from '../../actions/user_actions';
import { connect } from "react-redux";
import TicketForm from "./ticket_form";

const msp = (state, ownProps) => ({
    ticketId: ownProps.match.params.ticketId,
    ticket: state.entities.tickets[ownProps.match.params.ticketId],
    currentUser: state.entities.users[state.session.user],
    currentOrg: state.entities.users[state.session.user].organization,
    orgUsers: getOrgUsers(state.entities.users[state.session.user].organization)
});

const mdp = dispatch => ({
    createTicket: ticket => dispatch(createTicket(ticket)),
    getTicket: id => dispatch(getTicket(id)),
    updateTicket: ticket => dispatch(updateTicket(ticket)),
    getOrgUsers: org => dispatch(getOrgUsers(org))
});

const TicketFormContainer = connect(msp, mdp)(TicketForm);

export default TicketFormContainer;