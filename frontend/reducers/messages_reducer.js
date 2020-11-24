import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message });
        case RECEIVE_MESSAGES:
            return action.messages;
        default:
            return state;
    }
}

export default messagesReducer;