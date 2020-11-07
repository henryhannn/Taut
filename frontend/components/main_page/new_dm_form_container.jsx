import { connect } from 'react-redux';
import NewDMForm from './new_dm_form';
import { createChannel, fetchChannels } from '../../actions/channel_actions';
import { createMembership, fetchMemberships } from '../../actions/membership_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  members: state.entities.memberships,
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel, redirect) => dispatch(createChannel(channel, redirect)),
  fetchChannels: () => dispatch(fetchChannels()),
  createMembership: (membership) => dispatch(createMembership(membership)),
  fetchMemberships: (channelId) => dispatch(fetchMemberships(channelId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm);