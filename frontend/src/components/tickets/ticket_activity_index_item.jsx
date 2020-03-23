import React from "react";
import { Link } from "react-router-dom";

class ActivityIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="update-activity">
          
            <Link to={`/users/${this.props.update.actor.id}`} 
                >

                <span className="update-text"
                    >
                    {this.props.update.actor.firstName}
                </span>

                <span className="update-text"
                    >
                    {this.props.update.actor.lastName}
                </span>

            </Link>


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
