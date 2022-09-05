export const PROFILE_DATA = (data) => {
  return {
    type: "PROFILE_DATA",
    payload: data,
  };
};

export const PLAYLIST = (playlist) => {
  return {
    type: "PLAYLIST",
    payload: playlist,
  };
};

export const PLAYLIST_DATA = (playlist_data) => {
  return {
    type: "PLAYLIST_DATA",
    payload: playlist_data,
  };
};

export const ACCESS_TOKEN_ERROR = (error) => {
  return {
    type: "ACCESS_TOKEN_ERROR",
    payload: error,
  };
};

export const CLICKED_SONG = (song) => {
  return {
    type: "CLICKED_SONG",
    payload: song,
  };
};