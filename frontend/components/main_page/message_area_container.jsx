import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MessageArea from './message_area';
import { fetchChannel, fetchChannels } from '../../actions/channel_actions';
import { fetchMemberships } from '../../actions/membership_actions';
import { createMessage, receiveMessage, fetchMessages } from '../../actions/message_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
    existingMessages: Object.values(state.entities.messages),
    memberships: Object.values(state.entities.memberships)
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMemberships: (channelId) => dispatch(fetchMemberships(channelId)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageArea));