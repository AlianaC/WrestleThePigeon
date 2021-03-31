import React from 'react' 
import { getTopArtists } from './api/Spotify';

class Login extends React.Component {

    static async getInitialProps({ query }) {
        const url = 'https://wrestle-the-pigeon-six.vercel.app/api/top-artists?code='+ query.code;
        //const url = 'http://localhost:3000/api/top-artists?code='+ query.code;
        const res = await fetch(url);
        const json = await res.json();
        return { topArtists : json.items, userArtistData : json.userArtistData}
    }

    getTopStates = (data) => {
        // Need to sort the dictionary
        return(
            <p></p>
        )
    }

    render() {

        var topArtists = this.props.topArtists.slice(0,10);
        var userArtistData = this.props.userArtistData;

        return (
            <div>
                <h1>Successfully connected with Spotify</h1>
                <h3>Top Artists:</h3>
                <div>{topArtists.map(artist => <div key={artist.name}>{artist.name}</div>)}</div> 
                <h3>Top States:</h3> 
                <div>{this.getTopStates(userArtistData)}</div>
            </div>
        )
    }
}

export default Login;

