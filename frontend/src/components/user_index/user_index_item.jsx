import React from "react"
import { Link } from "react-router-dom"

import './user_index.css'

const formatDate = (time) => {
  let date = new Date(time);
  let dateString = date.toDateString();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let timeString

  if (hours === 0) {
    timeString = ` 1:${minutes}am`;
  } else if (hours > 12) {
    hours = hours % 12;
    timeString = `${hours}:${minutes}pm`;
  } else if (hours === 12) {
    timeString = `12:${minutes}pm`;
  } else {
    timeString = `${hours}:${minutes}am`;
  }

  return `${dateString} ${timeString}`
};


const UserIndexItem = ({ users }) => {

  const userInfo = users.map((user) => (
    <div className="user-index-item">
        <span id="index-avitar" className="avitar">
          {user.firstName.slice(0, 1)}{user.lastName.slice(0, 1)}
        </span> 
      <Link to={`/users/${user._id}`}>
        {user.firstName} {user.lastName} 
      </Link> <span className="started-on">
        Started on {formatDate(user.createdAt)}
      </span>
    </div>
  ));

  return (
    <div>{userInfo}</div>
  )
}

export default UserIndexItem 