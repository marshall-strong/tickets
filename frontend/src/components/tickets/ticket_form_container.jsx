import { createTicket, getTicket, updateTicket } from "../../actions/ticket_actions";
import { connect } from "react-redux";
import TicketForm from "./ticket_form";


const msp = (state, ownProps) => ({
    id: ownProps.match.params.id,
    ticket: state.entities.tickets[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.user]
});

const mdp = dispatch => ({
    createTicket: ticket => dispatch(createTicket(ticket)),
    getTicket: id => dispatch(getTicket(id)),
    updateTicket: ticket => dispatch(updateTicket(ticket))
});

const TicketFormContainer = connect(msp, mdp)(TicketForm);

export default TicketFormContainer;