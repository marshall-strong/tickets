import React from 'react'

const CommentIndexItem = props => {
    return (
        <div>
            {props.ticket.comments}
        </div>
    )
} 

export default CommentIndexItem