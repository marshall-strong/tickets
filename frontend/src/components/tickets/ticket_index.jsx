import React from 'react'
import TicketIndexItem from './ticket_index_item'
import { Link } from 'react-router-dom'
import TicketForm from './ticket_form'

class TicketIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case '/tickets/owner':
                return this.props.fetchOwnerTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case '/tickets/subscribed':
                return this.props.fetchSubscribedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case '/tickets/creator':
                return this.props.fetchCreatedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case '/tickets/starred': 
                return this.props.fetchStarredTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            default:
                return this.props.getTickets().then(tickets => this.setState(tickets))
        }
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push(`/tickets/${this.props.ticketId}`)
    }

    render() {
        debugger
        if (!this.state.tickets) return null
        const { tickets } = this.state
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
