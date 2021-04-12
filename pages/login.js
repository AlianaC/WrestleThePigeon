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

    rankStates = (data) => {
        var states = Object.keys(data).map(function(key) {
            return [key, data[key]];
        });
        states.sort(function(first, second) {
            return second[1] - first[1];
        });

        var top10 = states.slice(0,10);
        var bottom10 = states.slice(states.length-10, states.length-1);
        return{
            top10: top10,
            bottom10: bottom10
        };
    }

    render() {

        var topArtists = this.props.topArtists.slice(0,10);
        var userArtistData = this.props.userArtistData;
        var states = this.rankStates(userArtistData);
        

        return (
            <div>
                <h1>Successfully connected with Spotify</h1>
                <h3>Top Artists:</h3>
                <div>{topArtists.map(artist => <div key={artist.name}>{artist.name}</div>)}</div> 
                <h3>Top States:</h3> 
                <div>{states.top10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                <h3>Bottom States:</h3> 
                <div>{states.bottom10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
            </div>
        )
    }
}

export default Login;

