import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
} = process.env;

//var redirect_uri = 'http://localhost:3000/login/';
var redirect_uri = "https://wrestle-the-pigeon-six.vercel.app/login/";


const basic = (new Buffer.from(client_id + ':' + client_secret).toString('base64'));
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (code) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    })
  });

  return response.json();
};

export const getTopArtists = async (code) => {
  const { access_token } = await getAccessToken(code);

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};