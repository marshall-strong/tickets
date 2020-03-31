import React from 'react'
import {withRouter} from "react-router-dom"
// import * as CommentAPIUtil from '../util/comment_api_util';

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
    let months = {
        "01": "January", 
        "02": "February", 
        "03": "March", 
        "04": "April", 
        "05": "May", 
        "05": "June", 
        "07": "July", 
        "08": "August", 
        "09": "September", 
        "10": "October", 
        "11": "November", 
        "12": "December"
    }
    let slicedTime = time.slice(0, 10)
    let timeArr = slicedTime.split("-")
    let month = timeArr[1]
    let monthStr = months[month.toString()]

    return monthStr + " " + timeArr[2].toString() + " " + timeArr[0].toString()
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
        // if(!this.props.comments) {
        //     return null
        // }

        return (
        <div>
            {this.props.comment.firstName} 
                {this.props.comment.lastName} &nbsp;
            commented &nbsp;
                "{this.props.comment.body}" &nbsp;
            on &nbsp;
            {/* { hours }:{minutes}: PDT */}
            {this.convertDate(this.props.comment.time)} at 
            {this.convertTime(this.props.comment.time)}

                <button className="button1" onClick={this.handleDelete}>Delete Comment</button>
        </div>
        )
    }
} 

export default withRouter(CommentIndexItem)