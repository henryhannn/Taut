import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MessageArea from './message_area';
import { openAbout } from '../../actions/about_actions';
import { fetchChannel, fetchChannels } from '../../actions/channel_actions';
import { fetchMemberships } from '../../actions/membership_actions';
import { createMessage, receiveMessage } from '../../actions/message_actions';
import { openModal, openModalWithProps } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
    existingMessages: Object.keys(state.entities.messages).map(id => state.entities.messages[id]),
    // about: state.ui.about,
    memberships: Object.values(state.entities.memberships)
});

const mapDispatchToProps = (dispatch) => ({
    // openAbout: () => dispatch(openAbout()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMemberships: (channelId) => dispatch(fetchMemberships(channelId)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    openModal: (modal) => dispatch(openModal(modal)),
    openModalWithProps: (modal, props) => dispatch(openModalWithProps(modal, props)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageArea));