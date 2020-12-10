import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => ({
    channels: Object.values(state.entities.channels),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logoutUser: () => dispatch(logout()),
    fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);