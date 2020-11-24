import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channels.id]: action.channels});
        case RECEIVE_CHANNELS:
            return action.channels;
        case REMOVE_CHANNEL:
            newState[action.channelId] = undefined;
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;