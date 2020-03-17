import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ticketsReducer from './tickets_reducer';
import tagsReducer from './tags_reducer';
import ticketReducer from './ticket_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tickets: ticketsReducer,
    tags: tagsReducer,
    ticket: ticketReducer
})

export default entitiesReducer;