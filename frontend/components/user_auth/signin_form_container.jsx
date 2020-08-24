import { connect } from 'react-redux';
import { signin, clearSigninErrors } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign in'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signin(user)),
        clearSigninErrors: () => dispatch(clearSigninErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);