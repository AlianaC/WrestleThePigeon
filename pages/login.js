import React from 'react'

class Login extends React.Component {
    static async getInitialProps({ query }) {
        const url = 'http://localhost:3000/api/top-artists?code='+ query.code;
        const res = await fetch(url);
        const json = await res.json();
        return { topArtists : json.items }
    }


    render() {
        var topArtists = this.props.topArtists.slice(0,20);
    return (
        <div>
            <h1>Logged In</h1>
            <h3>Top Artists:</h3>
            <div>{topArtists.map(artist => <div>{artist.name}</div>)}</div>  
        </div>
    )
    }
}

export default Login;
