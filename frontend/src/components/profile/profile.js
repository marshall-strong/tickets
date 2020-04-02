import React from "react"
import { Link } from "react-router-dom"

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.convertTime = this.convertTime.bind(this);
    this.convertDate = this.convertDate.bind(this);
  }

  componentDidMount() {
    this.props.fetchCreatedTickets(this.props.match.params.userId);
    this.props.fetchUserComments(this.props.match.params.userId);
  }

  convertTime(time) {
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let timeString;

    if (hours === 0) {
      timeString = ` 12:${minutes}am `;
    } else if (hours === 12) {
      timeString = ` ${hours}:${minutes}pm`;
    } else if (hours > 12) {
      hours = hours % 12;
      timeString = ` ${hours}:${minutes}pm`;
    } else {
      timeString = ` ${hours}:${minutes}am`;
    }
    return timeString;
  }

  convertDate(time) {
    let date = new Date(time);
    return date.toDateString();
  }

  render() {
    const { user, comments, tickets } = this.props;

    const sortedArray = tickets.concat(comments).sort((ele1, ele2) =>
    ele1.createdAt < ele2.createdAt ? 1 : ele1.createdAt > ele2.createdAt ? -1 : 0)
    
    debugger
    return (
      <div>
        <div className="profile-header-container">
          <h1>
            {user.firstName} {user.lastName} {user.createdAt}
          </h1>
        </div>
        {sortedArray.map(item => {
      if (item.creator) {
          return (
      <div>
        <span>
          {item.creator.firstName}
          {item.creator.lastName} created
          "{item.title}"
        </span>
        <Link to={`/tickets/${item._id}`}>{item._id}</Link>
            {this.convertDate(item.createdAt)}
            {this.convertTime(item.createdAt)}
      </div>
          )
      } else {
           return (
             <div>
               <span>
                 {item.author.firstName}
                 {item.author.lastName} commented: {" "}
                 "{item.body}" on
               </span>
           <Link to={`/tickets/${item.ticket._id}`}>{item.ticket._id} {item.ticket.title}</Link>
               {this.convertDate(item.createdAt)}
               {this.convertTime(item.createdAt)}
             </div>
           );
      }
    })}
      </div>
    );
  }
}

export default Profile