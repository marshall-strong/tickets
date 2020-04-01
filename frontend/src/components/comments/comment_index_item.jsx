import React from 'react'
import {Link, withRouter} from "react-router-dom"

class CommentIndexItem extends React.Component{ 
     constructor(props) {
        super(props)

       this.convertDate = this.convertDate.bind(this) 
       this.convertTime = this.convertTime.bind(this) 
       this.handleDelete = this.handleDelete.bind(this) 
     }

    handleDelete(e) {
        this.props.deleteComment(this.props.comment.commentId);
    }

convertDate(time) {
    let date = new Date(time)
    let year = date.getYear() + 1900
    let month = date.getMonth()
    let day = date.getDate()

    let months = {
        "0": "January", 
        "1": "February", 
        "2": "March", 
        "3": "April", 
        "4": "May", 
        "5": "June", 
        "6": "July", 
        "7": "August", 
        "8": "September", 
        "9": "October", 
        "10": "November", 
        "11": "December"
    }
  
    let monthStr = months[month].toString()

    return `${monthStr} ${day} ${year}`
}

convertTime(time) {
    let date = new Date(time)
    let hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = (minutes < 10) ? `0${minutes}` : minutes;

    let timeString  

    if (hours === 12) {
        timeString = ` ${hours}:${minutes}pm`
    }else if (hours > 12) {
        hours = hours % 12
        timeString = ` ${hours}:${minutes}pm`
    } else {
        timeString = ` ${hours}:${minutes}am`
    }

    return timeString
}

    render() {
        return (
        <div>
                <Link to={`/users/${this.props.comment.userId}`}>{this.props.comment.firstName}  {this.props.comment.lastName}</Link>
               &nbsp;
            commented &nbsp;
                "{this.props.comment.body}" &nbsp;
            on &nbsp;
            {this.convertDate(this.props.comment.time)} at 
            {this.convertTime(this.props.comment.time)}

                <button className="button1" onClick={this.handleDelete}>Delete Comment</button>
        </div>
        )
    }
} 

export default withRouter(CommentIndexItem)