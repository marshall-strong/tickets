import * as TicketAPIUtil from '../util/ticket_api_util'

export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";
export const FETCH_USER_TICKETS = "FETCH_USER_TICKETS";

const receiveAllTickets = tickets => ({
    type: RECEIVE_TICKETS,
    tickets: tickets
})

const receiveTicket = ticket => ({
    type: RECEIVE_TICKET,
    ticket: ticket
})

const receiveTicketErrors = errors => ({
    type: RECEIVE_TICKET_ERRORS,
    erros: errors
})

export const receiveUserTickets = tickets => ({
  type: RECEIVE_USER_TICKETS,
  tickets
});


export const requestTickets = () => dispatch => (
    TicketAPIUtil.getTickets()
    .then(tickets => dispatch(receiveAllTickets(tickets)))
) 

export const createTicket = ticket => dispatch => (
    TicketAPIUtil.createTicket(ticket)
    .then(newTicket => dispatch(receiveTicket(newTicket)))
    .catch(errors => dispatch(receiveTicketErrors(errors)))
) 

export const requestTicket = id => dispatch => (
    TicketAPIUtil.getTicket(id)
    .then(ticket => dispatch(receiveTicket(ticket)))
    .catch(errors => dispatch(receiveTicketErrors(errors)))
) 

export const updateTicket = ticket => dispatch => (
    TicketAPIUtil.updateTicket(ticket)
    .then(updatedTicket => dispatch(receiveTicket(updatedTicket)))
    .catch(errors => dispatch(receiveTicketErrors(errors)))
) 

export const fetchUserTickets = id => dispatch => (
  getUserTweets(id)
    .then(tickets => dispatch(receiveUserTickets(tickets)))
    .catch(errors => dispatch(receiveTicketErrors(errors)))
)
