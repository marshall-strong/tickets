import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import ticktsReducer from './tickets_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    tickets: ticktsReducer
})

export default entitiesReducer;