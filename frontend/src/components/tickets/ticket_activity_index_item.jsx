import React from "react";

class ActivityIndexItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.update.actor.firstName}
        {this.props.update.actor.lastName}
        updated the ticket at {this.props.update.time}
      </div>
    );
  }
}

export default ActivityIndexItem;
