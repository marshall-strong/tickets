import { connect } from 'react-redux'
import TicketIndex from './ticket_index'

const mstp = state => ({
    tickets: Object.values(state.entities.tickets)
})

const mdtp = dispatch => ({
    fetchOwnerTickets: userId => dispatch(fetchOwnerTickets(userId)),
    fetchCreatedTickets: userId => dispatch(fetchCreatedTickets(userId)),
    getTickets: () => dispatch(getTickets())
})

export default connect(mstp, mdtp)(TicketIndex)