import React from "react"
import { Link } from "react-router-dom"
import "./profile.css"

class Profile extends React.Component {
    constructor(props) {
        super(props)
      
    
    }

    componentDidMount() {
        this.props.fetchCreatedTickets(this.props.match.params.userId)
        this.props.fetchUserComments(this.props.match.params.userId)
    }

    render() {
        const {user, comments, tickets, currentUser} = this.props;

        if(!user) {
            return null
        }

        const userCommentInfo = comments.map(ticket => (
          <div className="user-comments-container">
            
            <span className="user-comments"
                > 
                {user.firstName} 
            </span>
            
            <span className="user-comments"
                > 
                {user.lastName} 
            </span>

            <span className="text"
                > 
                commented: 
            </span>

            <span className="user-comments"
                > 
                {comments.body} 
            </span>

             <span className="text"
                > 
                on
            </span>

            <Link to={`/ticket/${ticket._id}`}
                >{ticket.title}
            </Link>

             <span className="text"
                > 
                at: 
            </span>

            <span className="user-comments"
                > 
                {ticket.createdAt} 
            </span>


          </div>
        )); 

        const userTicketInfo = tickets.map(ticket => (
            <div className="user-update-container">

                <span className="user-updates"
                    >
                    {ticket.creator.firstName}
                </span>

                <span className="user-updates"
                    > 
                    {ticket.creator.lastName}
                </span>

                <span className="text"
                    >
                    created the ticket:
                </span>

                 <Link to={`/tickets/${ticket._id}`}
                    >
                    {ticket.title}
                </Link>

                <span className="text"
                    >
                    at:
                </span>

                <span className="user-updates"
                    >
                    {ticket.createdAt} 
                </span>

          </div>
        )); 

        return (
          <div>
 
            <div className="profile-header-container">

                <h1 className="welcome-message">
                       
                    <span className="header-text"
                        >
                        {user.firstName} 
                    </span>

                    <span className="header-text"
                        >
                        {user.lastName}
                    </span>

                </h1>
                    <img className="garfield" src=
                    "https://www.catster.com/wp-content/uploads/2018/09/garfield-final.jpg"
                    >
                    </img>
            </div>

            <div>{userTicketInfo}</div>

            <div>{userCommentInfo}</div>
          </div>
        );
    }
}

export default Profile