import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { withRouter } from 'react-router-dom';
import { createChannel, receiveChannel, fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    channels: state.entities.channels,
    channelId: ownProps.match.params.channelId
});

const mapDispatchToProps = (dispatch) => ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    receiveChannel: (channel) => dispatch(receiveChannel(channel)),
    fetchChannels: () => dispatch(fetchChannels())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));