import { RECEIVE_TICKET_ERRORS, RECEIVE_TICKET } from '../actions/ticket_actions'

const ticketErrorsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    const newState = Object.assign({}, defaultState)

    switch (action.type) {
        case RECEIVE_TICKET_ERRORS:
            return action.errors
        default:
            return defaultState
    }
}

export default ticketErrorsReducer