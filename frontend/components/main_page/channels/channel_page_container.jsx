import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { fetchChannel, fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import { fetchMessages, receiveMessage } from '../../../actions/message_actions';
import ChannelPage from './channel_page';

const mapStateToProps = (state, ownProps) => {
  return ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    messages: Object.values(state.entities.messages),
    channels: Object.values(state.entities.channels),
    currentUser: state.entities.users[state.session.id]
  })

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannel: () => dispatch(fetchChannel(ownProps.match.params.channelId)),
  fetchMessages: () => dispatch(fetchMessages(ownProps.match.params.channelId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  logoutUser: () => dispatch(logout()),
  fetchChannels: () => dispatch(fetchChannels()),
  deleteChannel: () => dispatch(deleteChannel(ownProps.match.params.channelId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)