import { connect } from 'react-redux';
import FrontPage from './front_page';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);