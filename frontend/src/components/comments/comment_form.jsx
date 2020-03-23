import React from 'react'
import {withRouter} from 'react-router-dom'
import comments from "./comments.css"

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            body: '',
            author: this.props.currentUser.id,
            ticketId: this.props.ticketId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    navigate

    handleSubmit() {
        this.props.createComment(this.state)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <textarea className="comment-text-area" type="textarea" value={this.state.body} onChange={this.update('body')}> </textarea>
                <button className="comment-button">Create Comment</button>
            </form>
        )
    }
  
}

export default withRouter(CommentForm)