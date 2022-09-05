const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "481ceb086f804851ab8a78f93823b61f";
const redirectUri = "http://localhost:3000/home";
const responseType = "token"


const scopes= [
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-read-playback-position",
    "user-modify-playback-state",
];


export const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export default authUrl;