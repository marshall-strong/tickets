import { connect } from 'react-redux'
import TicketIndex from './ticket_index'
import { withRouter } from 'react-router-dom'

const mstp = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    tickets: Object.values(state.entities.tickets)
})

const mdtp = dispatch => ({
    fetchOwnerTickets: userId => dispatch(fetchOwnerTickets(userId)),
    fetchCreatedTickets: userId => dispatch(fetchCreatedTickets(userId)),
    getTickets: () => dispatch(getTickets())
})

export default withRouter(connect(mstp, mdtp)(TicketIndex))