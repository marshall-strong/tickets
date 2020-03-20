import React from 'react'

const TicketIndexItem = props => {
    return (
        <ul>
            <li>{props.ticket.id}</li>
            <li>{props.ticket.creator}</li>
            <li>{props.ticket.owner}</li>
            <li>{props.ticket.tags}</li>
            <li>{props.ticket.subscribers}</li>
            <li>{props.ticket.title}</li>
            <li>{props.ticket.body}</li>
            <li>{props.ticket.startDate}</li>
            <li>{props.ticket.endDate}</li>
            <li>{props.ticket.status}</li>
            <li>{props.ticket.priority}</li>
        </ul>
    )
}

export default TicketIndexItem