import React from "react";

class ActivityIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="update-activity">
          
            <span className="update-text"
                >
                {this.props.update.actor.firstName}
            </span>

            <span className="update-text"
                >
                {this.props.update.actor.lastName}
            </span>

            <span className=""
                >
                updated the ticket at:
            </span>

            <span className="update-text"
                >
                {this.props.update.time}
            </span>

        </div>
    );
  }
}

export default ActivityIndexItem;
