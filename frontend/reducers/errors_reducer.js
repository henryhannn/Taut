import { combineReducers } from 'redux';

import signinErrorsReducer from './signin_errors_reducer';

const errorsReducer = combineReducers({
    session: signinErrorsReducer
});
  
export default errorsReducer;