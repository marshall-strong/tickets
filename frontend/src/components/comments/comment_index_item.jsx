import React from 'react'
import { Link }  from "react-router-dom"

const CommentIndexItem = props => {
    debugger
    return (
        <div className="comment-activity">

                <Link user={props.author} to={`/users/${props.author}`}>

                    <span className="comment-text">
                        {props.comment.firstName}
                    </span>

                    <span className="comment-text">
                        {props.comment.lastName}
                    </span>

                </Link>

                    <span className="text"
                        > 
                        commented:
                    </span>

                    <span className="comment-text"
                        >
                        {props.comment.body}
                    </span>

                    <span className="text"
                        > 
                        at:
                    </span>

                    <span className="comment-text"
                        >
                        {props.comment.time}
                    </span>

        </div>
    );
} 

export default CommentIndexItem