import { combineReducers } from "redux";
import tagErrorsReducer from './tag_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer'
import ticketErrorsReducer from "./ticket_errors_reducer";

const errorsReducer = combineReducers({
    tags: tagErrorsReducer,
    session: SessionErrorsReducer,
    tickets: ticketErrorsReducer
})

export default errorsReducer;