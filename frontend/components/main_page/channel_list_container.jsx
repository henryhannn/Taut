import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { createChannel, receiveChannel, fetchChannels } from '../../actions/channel_actions';
// import { openModal, openModalWithProps } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannels: () => dispatch(fetchChannels()),
    // openModal: (modal) => dispatch(openModal(modal))
});

const ChannelListContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelList);
export default ChannelListContainer;