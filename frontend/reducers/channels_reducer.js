import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CHANNELS:
            newState = {};
            action.channels.forEach(channel => { newState[channel.id] = channel });
            return newState;
        case RECEIVE_CHANNEL:
            newState = {...state};
            newState[action.channel.id] = action.channel;
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;