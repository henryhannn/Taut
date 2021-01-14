import { connect } from 'react-redux';
import { fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import ChannelDelete from './channel_delete';

const mapStateToProps = (state, ownProps) => {
  return ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    channels: Object.values(state.entities.channels)
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDelete)