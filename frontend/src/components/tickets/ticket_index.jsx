import React from 'react'
import TicketIndexItem from './ticket_index_item'
import { Link } from 'react-router-dom'
import TicketForm from './ticket_form'

class TicketIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.state = this.props.tickets.filter(ticket => )
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case '/tickets/folders/owner':
                return this.props.fetchOwnerTickets(this.props.match.params.userId)
            case '/tickets/folders/subscribers':
                return this.props.fetchSubscribedTickets(this.props.match.params.userId)
            case '/tickets/folders/created':
                return this.props.fetchCreatedTickets(this.props.match.params.userId)
            case '/tickets/folders/starred': 
                return this.props.fetchStarredTickets(this.props.match.params.userId)
            default:
                return this.props.getTickets()
        }
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push(`/tickets/${this.props.ticketId}`)
    }

    render() {
        const { tickets } = this.props
        return(
            <div>
                <ul>
                    {tickets.map(ticket => <li><TicketIndexItem key={ticket.id} ticket={ticket} /></li>)}
                </ul>
                <button onClick={this.handleClick}>ticket form for ticket</button>
            </div>
        )
    }
}

export default TicketIndex
