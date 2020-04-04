import React from 'react'
import TicketIndexItem from './ticket_index_item'
import './ticket_index.css'

class TicketIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => this.formatTable(), 1000);
    // in case of page refresh, fetch the current user to overwrite 
    // stale preloaded state from login and get updated starred list
    this.props.getOneUser(this.props.currentUser._id)
      switch (this.props.location.pathname) {
        case `/tickets/owner/${this.props.userId}`:
          return this.props.fetchOwnerTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/subscribed/${this.props.userId}`:
          return this.props.fetchSubscribedTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/creator/${this.props.userId}`:
          return this.props.fetchCreatedTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/starred/${this.props.userId}`: 
          return this.props.fetchStarredTickets(this.props.currentUser).then(action => this.setState({tickets: action.tickets}));
        default:
          return null
      }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      switch (this.props.location.pathname) {
        case `/tickets/owner/${this.props.userId}`:
          return this.props.fetchOwnerTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/subscribed/${this.props.userId}`:
          return this.props.fetchSubscribedTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/creator/${this.props.userId}`:
          return this.props.fetchCreatedTickets(this.props.match.params.userId).then(action => this.setState({tickets: action.tickets}))
        case `/tickets/starred/${this.props.userId}`:
            return this.props.fetchStarredTickets(this.props.currentUser).then(action => this.setState({tickets: action.tickets}));
        default:
          return null
      }
    }
  }

  formatTable() {
    let handles = document.getElementsByClassName('handle');

    let clickPos
    for (let i = 0; i < handles.length; i++) {
      handles[i].addEventListener('mousedown', (e) => {
        e.preventDefault();
        clickPos = e.pageX
      })

      handles[i].addEventListener('mousemove', (e) => {
        if (!clickPos) return 0;
        debugger
      })
    }

  }

  render() {
    if (!this.state.tickets) return null
    const tickets = Object.values(this.state.tickets);
    const { currentUser, updateUser } = this.props

    return (
      <div className="table">
        <div className="table-header-group">
          <div className="table-cell">Creator</div><div className="handle 1"></div>
          <div className="table-cell">Owner</div><div className="handle 2"></div>
          <div className="table-cell">Title</div><div className="handle 3"></div>
          <div className="table-cell">Created At</div><div className="handle 4"></div>
          <div className="table-cell">Updated At</div><div className="handle 5"></div>
          <div className="table-cell">Status</div><div className="handle 6"></div>
          <div className="table-cell">Priority</div><div className="handle 7"></div>
          <div className="table-cell">Start Date</div><div className="handle 8"></div>
          <div className="table-cell">End Date</div><div className="handle 9"></div>
          <div className="table-cell">Starred</div>
        </div>
        <div className="table-row-group">
          {tickets.map(ticket => (
            <TicketIndexItem 
              key={ticket._id} 
              ticket={ticket} 
              currentUser={currentUser}
              starredIds={currentUser.starred}
              updateUser={updateUser}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TicketIndex
