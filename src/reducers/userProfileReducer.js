import { PROFILE_DATA } from "../actions/index";

const initialState = {
  userData: {},
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;
