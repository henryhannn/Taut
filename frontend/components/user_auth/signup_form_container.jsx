import { connect } from 'react-redux';
import { signup, clearSigninErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearSigninErrors: () => dispatch(clearSigninErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);