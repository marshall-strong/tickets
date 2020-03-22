import React from 'react'
import { Link } from 'react-router-dom'

const TicketIndexItem = props => {
    
    return (
        <ul className="index-container2">
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.id}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.creator.firstName} {props.ticket.creator.lastName}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.createdAt}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.updatedAt[0]}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.owner}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.starred}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.title}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.status}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.priority}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.startDate}</li></Link>
            <Link to={`/tickets/${props.ticketId}`} style={{ textDecoration: 'none' }}><li>{props.ticket.endDate}</li></Link>
        </ul>
    )
}

export default TicketIndexItem