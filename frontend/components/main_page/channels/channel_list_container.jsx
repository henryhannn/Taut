import { connect } from 'react-redux';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelList from './channel_list';

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)