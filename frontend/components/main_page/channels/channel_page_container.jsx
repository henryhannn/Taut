import { connect } from 'react-redux';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchMessages, receiveMessage } from '../../../actions/message_actions';
import ChannelPage from './channel_page';

const mapStateToProps = (state, ownProps) => {
  return ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    messages: Object.values(state.entities.messages)
  })

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannel: () => dispatch(fetchChannel(ownProps.match.params.channelId)),
  fetchMessages: () => dispatch(fetchMessages(ownProps.match.params.channelId)),
  receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)