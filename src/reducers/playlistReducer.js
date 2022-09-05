import { PLAYLIST, PLAYLIST_DATA, CLICKED_SONG } from "../actions/index";

const initialState = {
  playlist: {},
  playlists_data: [],
  clicked_song: {},
};

const playlistReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case PLAYLIST:
      return { ...state, playlist: action.payload };
    case PLAYLIST_DATA:
      return { ...state, playlists_data: action.payload };
    case CLICKED_SONG:
      return { ...state, clicked_song: action.payload };
    default:
      return state;
  }
};

export default playlistReducer;
