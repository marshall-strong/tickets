import React from "react";

const ActivityIndexItem = (props) => (
  <div>
    {props.update.actor.firstName}
    {props.update.actor.lastName}
    updated the ticket at {props.update.time}
  </div>
);

export default ActivityIndexItem;
