import { connect } from 'react-redux';
import NewDMForm from './new_dm_form';
import { createChannel, fetchChannels } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel, redirect) => dispatch(createChannel(channel, redirect)),
  fetchChannels: () => dispatch(fetchChannels()),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm);