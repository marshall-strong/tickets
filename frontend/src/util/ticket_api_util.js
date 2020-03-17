import axios from 'axios'

export const getTickets = () => (
    axios.get({
        url: '/api/tickets'
    })
)

export const createTicket = ticket => (
    axios.post({
        url: '/api/tickets',
        data: { ticket }
    })
)

export const getTicket = id => (
    axios.get({
        url: `/api/ticket/${id}`
    })
)

export const updateTicket = (ticket) => (
    axios.patch({
        url: `/api/ticket/${ticket.id}`,
        data: { ticket }
    })
)
