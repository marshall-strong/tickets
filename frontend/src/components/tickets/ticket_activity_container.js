import {connect} from "react-redux";
import TicketActivityIndex from "./ticket_activity_index";
import {withRouter} from "react-router-dom";
import {fetchTicketComments, deleteComment, updateComment, clearCommentErrors } from "../../actions/comment_actions";
import {getTicket} from "../../actions/ticket_actions";


const mSTP = (state, ownProps) => {
    debugger
    return{
    ticketId: ownProps.match.params.ticketId,
    ticket: state.entities.tickets[ownProps.match.params.ticketId],
    comments: Object.values(state.entities.comments),
    currentUser: state.session
    }
};

const mDTP = (dispatch) => ({
    fetchTicketComments: (ticketId) => dispatch(fetchTicketComments(ticketId)),
    getTicket: (ticketId) => dispatch(getTicket(ticketId)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    clearCommentErrors: () => dispatch(clearCommentErrors())
});


export default withRouter(connect(mSTP, mDTP)(TicketActivityIndex));