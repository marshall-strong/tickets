import * as SessionAPIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload: payload
});

// should be `receiveUserLogout`
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

// should be `receiveSessionErrors`
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

const demoUser = {
  email: "user@cats4humanity.org",
  password: "password"
};

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
    .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
); 

export const login = user => dispatch => {
    SessionAPIUtil.login(user)
    .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
};

export const loginDemoUser = () => dispatch => {
    return dispatch(login(demoUser))
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    SessionAPIUtil.setAuthToken(false)
    dispatch(logoutUser())
};
