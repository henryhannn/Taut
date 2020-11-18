import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions'

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_MESSAGE:
            newState[action.message.id] = action.message;
            return newState;
        case RECEIVE_MESSAGES:
            for (let i = 0; i < action.messages.length; i++) {
              newState[action.messages[i].id] = action.messages[i];
            }
            return newState;
        // case RECEIVE_CHANNEL:
        //     return action.data.messages;
        default:
            return state;
    }
}

export default messagesReducer;