import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = (data) => ({
    type: RECEIVE_CHANNEL,
    data
});

export const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
});

export const fetchChannels = () => dispatch => (
    APIUtil.fetchChannels()
        .then((channels) => (
            dispatch(receiveChannels(channels))
        ))
);

export const fetchChannel = (channelId) => dispatch => (
    APIUtil.fetchChannel(channelId)
        .then((channel) => {
            console.log("action", channel)
            dispatch(receiveChannel(channel))
        })
);

export const createChannel = (channel, redirect) => dispatch => (
    APIUtil.createChannel(channel)
        .then((newChannel) => {
            dispatch(receiveChannel(newChannel));
            dispatch(() => redirect(newChannel.channel.id))
        })
);

export const deleteChannel = (channelId) => dispatch => (
    APIUtil.deleteChannel(channelId)
        .then((channel) => (
            dispatch(removeChannel(channel.id))
        ))
);