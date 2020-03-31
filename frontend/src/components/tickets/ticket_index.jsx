import React from 'react'
import TicketIndexItem from './ticket_index_item'
import './ticket_index.css'

import './ticket_index.css'

class TicketIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/tickets/owner/${this.props.userId}`:
                return this.props.fetchOwnerTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/subscribed/${this.props.userId}`:
                return this.props.fetchSubscribedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/creator/${this.props.userId}`:
                return this.props.fetchCreatedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/starred/${this.props.userId}`: 
                 this.setState({ tickets: this.props.currentUser.starred })
            default:
                return null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
          switch (this.props.location.pathname) {
            case `/tickets/owner/${this.props.userId}`:
              return this.props.fetchOwnerTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/subscribed/${this.props.userId}`:
              return this.props.fetchSubscribedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/creator/${this.props.userId}`:
              return this.props.fetchCreatedTickets(this.props.match.params.userId).then(tickets => this.setState(tickets))
            case `/tickets/starred/${this.props.userId}`:
              return this.setState({tickets: prevProps.currentUser.starred})
            default:
              return null
          }
        }
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push(`/tickets/${this.props.ticketId}`)
    }

    render() {
      if (!this.state.tickets) return null
      const { tickets } = this.state
      const { currentUser, updateUser } = this.props
      let starredIds = currentUser.starred.map(ticket => ticket._id)
      return (
        <div>

          <table className="ticket-index">
            <th>Creator</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Starred</th>

            {tickets.map(ticket => (
              <TicketIndexItem 
                key={ticket._id} 
                ticket={ticket} 
                currentUser={currentUser}
                starredIds={starredIds}
                updateUser={updateUser}
              />
            ))}
          </table>
          
        </div>
      );
    }
}

export default TicketIndex
