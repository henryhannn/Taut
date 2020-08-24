import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SIGNIN_ERRORS = 'RECEIVE_SIGNIN_ERRORS';
export const CLEAR_SIGNIN_ERRORS = 'CLEAR_SIGNIN_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSigninErrors = errors => ({
    type: RECEIVE_SIGNIN_ERRORS,
    errors
});

export const clearSigninErrors = errors => ({
    type: CLEAR_SIGNIN_ERRORS
});

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveSigninErrors(err.responseJSON))))
);

export const signin = user => dispatch => (
    APIUtil.signin(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveSigninErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => (dispatch(logoutCurrentUser())),
        err => (dispatch(receiveSigninErrors(err.responseJSON))))
);