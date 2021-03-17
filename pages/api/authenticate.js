import querystring from 'querystring';

var scope = 'user-top-read';
var redirect_uri = "https://wrestle-the-pigeon-six.vercel.app/login/";

//var redirect_uri = 'http://localhost:3000/login/';
var client_id = process.env.SPOTIFY_CLIENT_ID;

export default (req, res) => {
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    }));

}