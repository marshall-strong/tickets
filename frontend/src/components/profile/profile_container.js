import { connect } from "react-redux"
import { fetchUserTickets} from "../../actions/ticket_actions"
import { getTicketComments } from "../../actions/comment_actions"
import Profile from "./profile"


const mSTP = (state, ownProps) => ({
    user: state.entities[ownProps.match.params.userId],
    ticketComments: Object.values(state.entities.comments),
    tickets: Object.values(state.tickets.user)
})

const mDTP = (dispatch) => ({
    fetchUserTickets: (tickets) => dispatch(fetchUserTickets(tickets)),
    getTicketComments: (comments) => dispatch(getTicketComments(comments))
})



export default connect(mSTP, mDTP)(Profile);