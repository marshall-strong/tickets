import { createTicket, getTicket, updateTicket } from "../../actions/ticket_actions";
import { connect } from "react-redux";
import TicketForm from "./ticket_form";
import {withRouter} from "react-router-dom";
import {fetchTicketComments} from "../../actions/comment_actions"
import { updateUser, getOneUser } from '../../actions/user_actions'

const msp = (state, ownProps) => {

    return ({
    ticketId: ownProps.match.params.ticketId,
    ticket: state.entities.tickets[ownProps.match.params.ticketId],
    currentUser: state.entities.users[state.session._id],
    });
}

const mdp = dispatch => ({
    getOneUser: userId => dispatch(getOneUser(userId)),
    createTicket: ticket => dispatch(createTicket(ticket)),
    getTicket: id => dispatch(getTicket(id)),
    updateTicket: ticket => dispatch(updateTicket(ticket)), 
    fetchTicketComments: id => dispatch(fetchTicketComments(id)),
    updateUser: user => dispatch(updateUser(user))
});

const TicketFormContainer = withRouter(connect(msp, mdp)(TicketForm));

export default TicketFormContainer;