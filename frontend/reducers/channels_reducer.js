import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel});
        case RECEIVE_CHANNELS:
            return action.channels;
        case REMOVE_CHANNEL:
            let newState = Object.assign({}, state);
            delete newState[action.channelId.channel_id];
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;