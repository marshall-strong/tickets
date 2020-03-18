import React from "react"
import { Link } from "react-router-dom"

class Profile extends React.Compenent {
    constructor(props) {
        super(props)
    }

render() {
    const {users, comments, tickets} = this.props;

    const users = Object.values(users) 
    userFirstAndLast = users.map(user => 
        <h2>{user.firstName} {user.lastName}</h2> 
        )


    const userTickets = [];
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].creator_id === user.id) {
            userTickets.push(tickets[i])
        }
    }

    const ticketCreatedInfo = userTickets.map(ticket => {
        const creator_id = ticket.creator_id;
        const creator = users[creator_id]
        let first = creator.firstName
        let last = create.lastName

        return(
            <div>
                <span>{ticket.createdAt} {first} {last} </span>
                <Link to="/tickets/users/:user_id">{ticket.id}</Link>
            </div>
        )
    });


    const userComments = [];
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].authorId === user.id) {
            userComments.push(comments[i])
        }
    }

    const commentCreatedInfo = userComments.map(comment => {
      const author_id = ticket.author_id;
      const author = users[author_id];
      let first = author.firstName;
      let last = author.lastName;

      return (
        <div>
          <span> {comment.createdAt} {first} {last} </span>
          <Link to="/comments/users/:user_id">{comment.id}</Link>
        </div>
      );
    });


    const userTickets = [];
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].creator_id === user.id) {
        userTickets.push(tickets[i]);
      }
    }

    const ticketUpdatedInfo = userTickets.map(ticket => {
      const creator_id = ticket.creator_id;
      const creator = users[creator_id];
      let first = creator.firstName;
      let last = create.lastName;

      return (
        <div>
          <span>
            {ticket.updatedAt} {first} {last}{" "}
          </span>
          <Link to="/tickets/users/:user_id">{ticket.id}</Link>
        </div>
      );
    });

    return (
      <div>
        <div className="profile-header-container">
          <header>
            {userFirstAndLast}
          </header>
        </div>

        <div className="ticket-created-container">
            {ticketCreatedInfo}
        </div>

        <div className="comment-created-container">
            {commentCreatedInfo}
        </div>

        <div className="ticket_updated-container">
            {ticketUpdatedInfo}
        </div>

      </div>
    );
}



}

export default Profile