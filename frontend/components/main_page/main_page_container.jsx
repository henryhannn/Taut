import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);