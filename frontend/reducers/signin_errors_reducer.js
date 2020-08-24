import {RECEIVE_SIGNIN_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SIGNIN_ERRORS} from '../actions/session_actions';
  
export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SIGNIN_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SIGNIN_ERRORS:
            return [];
        default:
            return state;
    }
};