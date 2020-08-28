import { connect } from 'react-redux';
import MessageArea from './message_area';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({

});

export default (connect(mapStateToProps, mapDispatchToProps)(MessageArea));