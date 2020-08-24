import { combineReducers } from 'redux';

import signinErrorsReducer from './signin_errors_reducer';

const errorsReducer = combineReducers({
    signin: signinErrorsReducer
});
  
export default errorsReducer;