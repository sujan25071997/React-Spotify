import { ACCESS_TOKEN_ERROR } from "../actions/index";

const initialState = {
    authRequestDone: true
};

const authReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ACCESS_TOKEN_ERROR:
      return { ...state, authRequestDone:action.payload};
    default:
      return state;
  }
};

export default authReducer;
