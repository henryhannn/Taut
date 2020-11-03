import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import About from './about';
import { closeAbout } from '../../actions/about_actions';

const mapStateToProps = (state, ownProps) => ({
  about: state.ui.about,
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  closeAbout: () => dispatch(closeAbout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));