export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const fetchChannels = () => dispatch => (
    $.ajax({
        method: "GET",
        url: "api/channels"
    }).then(channels => dispatch(receiveChannels(channels)))
);


export const createChannel = (channel) => dispatch => (
    $.ajax({
        method: "POST",
        url: "api/channels",
        data: { channel }
    }).then((channel) => dispatch(receiveChannel(channel)))
)