import React from 'react'

const CommentIndexItem = props => {
    return (
        <div className="comment-activity">

            <span className="comment-text">
                {props.comment.firstName}
            </span>

            <span className="comment-text">
                {props.comment.lastName}
            </span>

            commented on the ticket:

            <span className="comment-text">
                {props.comment.body}
            </span>

            at:

            <span className="comment-text">
                {props.comment.time}
            </span>

        </div>
    );
} 

export default CommentIndexItem