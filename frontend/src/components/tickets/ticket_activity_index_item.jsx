import React from "react";

class ActivityIndexItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.update.actor.firstName}
        {this.props.update.actor.lastName}
        updated the ticket at {this.props.update.time}

        <button onClick={()=> this.props.deleteComment(this.props.comments._id)}>D</button>
      </div>
    );
  }
}

export default ActivityIndexItem;
