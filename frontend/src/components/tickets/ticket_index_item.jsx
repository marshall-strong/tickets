import React from 'react'

const TicketIndexItem = props => {
    return (
        <ul>
            <li>{props.ticket.id}</li>
            <li>{props.ticket.creator.firstName}</li>
            <li>{props.ticket.createdAt}</li>
            <li>{props.ticket.updatedAt[0]}</li>
            <li>{props.ticket.owner}</li>
            <li>{props.ticket.title}</li>
            <li>{props.ticket.status}</li>
            <li>{props.ticket.priority}</li>
            <li>{props.ticket.startDate}</li>
            <li>{props.ticket.endDate}</li>
        </ul>
    )
}

export default TicketIndexItem