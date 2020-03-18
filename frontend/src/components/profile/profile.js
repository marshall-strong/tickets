import React from "react"
import { Link } from "react-router-dom"

class Profile extends React.Compenent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserTickets(this.props.params.match.creatorId)
        this.props.fetchTicketComments(this.props.params.match.authorId)
    }

    render() {
        const {user, ticketComments, tickets} = this.props;

        const userTicketComments = [];
        for (let i = 0; i < ticketComments.length; i++) {
            if( user.id === ticketComments[i].author_Id) {
                userTicketComments.push(ticketComments[i]);
            }
        }

        const userTicketInfo1 = tickets.map( ticket =>  <div>
                                <span> {ticket.createdAt} 
                                       {ticket.user.firstName}  
                                       {ticket.user.lastName} created
                                </span>
                                <Link 
                                to={`/ticket/${ticket.id}`}>{ticket.id}</Link> 
                            </div>
                            )
        
         const userTicketInfo2 = ticket.map( <div>
                                <span> {ticket.updatedAt} 
                                       {ticket.user.firstName}  
                                       {ticket.user.lastName} updated the 
                                       {ticket.title}
                                </span>
                                <Link 
                                to={`/ticket/${ticket.id}`}>{ticket.id}</Link> 
                            </div>
                            )
        


        return (
          <div>
            <div className="profile-header-container">
              <h1>
                Hello! {user.firstName} {user.lastName}
              </h1>
            </div>

            <div>{userTicketInfo1}</div>
            <div>{userTicketInfo2}</div>
            <div>{userComments}</div>
        </div>
        );
    }
}

export default Profile