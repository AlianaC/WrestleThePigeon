import React from 'react' 
import styles from '../styles/Home.module.css'
import Bar from '../components/bar.js'

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
        var bottom10 = states.slice(states.length-11, states.length-1);
        console.log(top10);
        return{
            top10: top10,
            bottom10: bottom10
        };
    }

    artistGenres = (data) => {
        var genres = {};
        data.map(artist => {
            if(artist.genres.length == 0){
                genres[artist.name] = ['No Data Available'];
            }else{
                genres[artist.name] = artist.genres;
            }
        });
        //console.log(genres);

    }

    topGenres = (data) => {
        var topGenres = {};
        data.map(artist => {
            var genres = artist.genres;
            genres.forEach(genre => {
                if(!topGenres.hasOwnProperty(genre)){
                    topGenres[genre] = 1;
                }else{
                    topGenres[genre] += 1;
                }
            })
        })
        var sortedGenres = Object.keys(topGenres).map(function(key) {
            return [key, topGenres[key]];
        });
        sortedGenres.sort(function(first, second) {
            return second[1] - first[1];
        })

        return(sortedGenres);
    }

    render() {

        var topArtists = this.props.topArtists.slice(0,10);
        var userArtistData = this.props.userArtistData;
        var states = this.rankStates(userArtistData);
        var artistGenres = this.artistGenres(topArtists);
        var topGenres = this.topGenres(topArtists);
        

        return (
            <div className={styles.second}>
                <div className={styles.userinfo}>
                    <h2>Successfully connected with Spotify</h2>
                    <h3>Top Artists:</h3>
                    <div>{topArtists.map(artist => <div key={artist.name}>{artist.name}</div>)}</div>
                    <h3>Top States:</h3> 
                    <div className={styles.graph}>
                        <div>{states.top10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={states.top10}/>
                    </div>
                    <h3>Bottom States:</h3>
                    <div className={styles.graph}>
                        <div>{states.bottom10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={states.bottom10}/>
                    </div> 
                    
                    
                </div>
            </div>
        )
    }
}

export default Login;

// <h3>Top Genres:</h3>
// <div>{topGenres.map(genre => <div key={genre[0]}>{genre[0]}: {genre[1]}</div>)}</div>