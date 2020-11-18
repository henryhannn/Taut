import { connect } from 'react-redux';
import NewMemberForm from './new_member_form';
import { closeModal } from '../../actions/modal_actions';
import { fetchMemberships, createMembership } from '../../actions/membership_actions';

const mapStateToProps = (state) => ({
  members: state.entities.memberships,
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchMemberships: (channelId) => dispatch(fetchMemberships(channelId)),
  createMembership: (member) => dispatch(createMembership(member)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberForm);