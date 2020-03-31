import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const TicketIndexItem = ({ ticket, history, currentUser, starredIds, updateUser }) => {
    ticket.owner = ticket.owner ? ticket.owner : ""
    return (
        <tr onClick={() => history.push(`/tickets/${ticket._id}`)} className="ticket-index-item">
            <td className='creator'> <Link to={`/users/${ticket.creator._id}`}>{ticket.creator.firstName} {ticket.creator.lastName}</Link> </td>
            <td className='owner'>{ticket.owner ? <Link to={`/users/${ticket.owner._id}`}>{ticket.owner.firstName + ' ' + ticket.owner.lastName}</Link> : '--'}</td>
            <td className="title">{ticket.title}</td>
            <td className="created-at">{ticket.createdAt.date}</td>
            <td className="updated-at">{ticket.updatedAt[0] ? ticket.updatedAt[0] : '--'}</td>
            <td className="status">{ticket.status ? ticket.status : '--'}</td>
            <td className="priority">{ticket.priority ? ticket.priority : '--'}</td>
            <td className="start-date">{ticket.startDate ? ticket.startDate : '--'}</td>
            <td className="end-date">{ticket.endDate ? ticket.endDate : '--'}</td>
            <td className="starred">  
                <div 
                    className="star"
                    onClick={(e) => {
                        e.stopPropagation();
                        let i = starredIds.indexOf(ticket._id);
                        if (i === -1) {
                            currentUser.starred.push(ticket._id);
                        } else {
                            currentUser.starred.splice(i, 1);
                        }
                        updateUser(currentUser);
                    }} 
                >
                    { starredIds.includes(ticket._id) ? "★" : "☆" }
                </div> 
            </td>
        </tr>
    )
}

export default withRouter(TicketIndexItem)