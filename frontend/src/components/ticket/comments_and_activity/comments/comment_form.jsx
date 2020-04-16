import React from 'react'
import {withRouter} from 'react-router-dom'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      body: this.props.body || '',
      author: this.props.currentUser._id,
      ticketId: this.props.ticketId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearCommentErrors();
    // this.props.ticket.lasyUpdateSeenBy = [];
    // this.props.updateTicket(this.props.ticket);
    this.props.action(this.state)
    .then((action) => {
      if (action.errors) return null;
      this.props.ticket.lastUpdateSeenBy = [];
      this.props.updateTicket(this.props.ticket);
    })
    this.setState({ body: "" });
  }

  componentWillUnmount(){
    this.props.clearCommentErrors()
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value})
    } 
  }

  render() {
    return (
      <div className="comment-form-container">
        <div>
          <span className="comment-errors">{this.props.errors.body}</span>
        </div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <div className="avitar">
            {this.props.currentUser.firstName.slice(0, 1)}
            {this.props.currentUser.lastName.slice(0, 1)}
          </div>
          <textarea
            value={this.state.body}
            onChange={this.update("body")}
            ></textarea>
          <button className="btn1">Create Comment</button>
        </form>
      </div>
    );
  }; 
};

export default withRouter(CommentForm)