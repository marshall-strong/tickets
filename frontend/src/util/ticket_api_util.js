import axios from 'axios'

export const getTickets = () => (
    axios.get(
        '/api/tickets'
    )
)

export const createTicket = ticket => (
    axios.post(
        '/api/tickets',
        ticket 
    )
)

export const getTicket = id => (
    axios.get(
        `/api/ticket/${id}`
    )
)

export const updateTicket = (ticket) => (
    axios.patch(
        `/api/ticket/${ticket.id}`,
        ticket
    )
)
