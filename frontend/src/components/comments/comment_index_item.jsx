import React from 'react'
import {withRouter} from "react-router-dom"

class CommentIndexItem extends React.Component{ 
     constructor(props) {
        super(props)

    

       this.convertDate = this.convertDate.bind(this) 
       this.convertTime = this.convertTime.bind(this) 
    //    this.getHours = this.getHours().bind(this) 
     }

componentWillReceiveProps(){
    if(this.nextprops.comment.body.length > 0) {
        this.props.history.push('/ticket/${ticketId}')
    }
}

convertDate(time) {
    let months = {
        January: "01", 
        February: "02", 
        "03" : "March", 
        April: "04", 
        May: "05", 
        June: "06", 
        July: "07", 
        August: "08", 
        Septmeber: "09", 
        October: "10", 
        November: "11", 
        December: "12"
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
    let seconds = date.getSeconds();

    minutes = (minutes < 10) ? `0${minutes}` : minutes;

    let timeString  

    if (hours > 12) {
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
            {this.props.comment.firstName} 
                {this.props.comment.lastName} &nbsp;
            commented &nbsp;
                "{this.props.comment.body}" &nbsp;
            on &nbsp;
            {/* { hours }:{minutes}: PDT */}
            {this.convertDate(this.props.comment.time)} at 
            {this.convertTime(this.props.comment.time)}
        </div>
        )
    }
} 

export default withRouter(CommentIndexItem)