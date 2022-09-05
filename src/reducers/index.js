import userProfileReducer from "./userProfileReducer";
import playlistReducer from "./playlistReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userProfile: userProfileReducer,
    playlistData: playlistReducer,
    auth: authReducer
});

export default rootReducer;
