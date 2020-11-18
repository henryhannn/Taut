import { RECEIVE_MEMBERSHIPS, RECEIVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";


const membershipReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type){
    case RECEIVE_MEMBERSHIPS:
      nextState = Object.assign({}, action.memberships);
      return nextState;
    case RECEIVE_MEMBERSHIP:
      nextState = Object.assign({}, state);
      nextState[action.membership.id] = action.membership;
      return nextState;
    // case RECEIVE_CHANNEL:
    //   return action.data.memberships;
    default:
      return state;
  }
}

export default membershipReducer;