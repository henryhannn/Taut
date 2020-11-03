import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    console.log("channels reducer", action);
    // debugger;
    switch (action.type) {
        case RECEIVE_CHANNEL:
            console.log("channels reducer", action.channels);
            newState[action.channels.id] = action.channels;
            return newState;
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