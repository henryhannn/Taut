import { OPEN_ABOUT, CLOSE_ABOUT } from "../actions/about_actions";

const AboutReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_ABOUT:
      return true;
    case CLOSE_ABOUT:
      return null;
    default: 
      return state;
  }
}

export default AboutReducer;