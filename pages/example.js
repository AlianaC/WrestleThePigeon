import React from 'react' 
import styles from '../styles/Home.module.css'
import Bar from '../components/bar.js'
import Link from 'next/link'
import Navbar from './navbar.js'

class Example extends React.Component {

    render() {

        var topArtists = [
            'Nothing But Thieves',
            'Lena Raine',
            'Young the Giant',
            'Phoebe Bridgers',
            'bbno$',
            'Sara Bareilles',
            'Darren Korb',
            'Japanese Breakfast',
            'Oliver Tree',
            'Ramin Djawadi'
        ]
        var top = [
            [ 'CA', 352 ],
            [ 'NY', 133 ],
            [ 'TX', 131 ],
            [ 'PA', 92 ],
            [ 'FL', 74 ],
            [ 'MA', 73 ],
            [ 'IL', 70 ],
            [ 'WA', 68 ],
            [ 'OH', 60 ],
            [ 'OR', 57 ]
        ]

        var bottom = [
            [ 'AR', 16 ],
            [ 'KS', 14 ],
            [ 'HI', 14 ],
            [ 'DE', 12 ],
            [ 'NH', 10 ],
            [ 'MT', 6 ],
            [ 'ND', 4 ],
            [ 'SD', 2 ],
            [ 'MS', 2 ],
            [ 'WV', 2 ]
        ]
        

        return (
            <div className={styles.second}>
                <Navbar />
                <div className={styles.userinfo}>
                    <h2>This is an example page when successfully connected to Spotify</h2>
                    <h3>Your Top Artists:</h3>
                    <div>{topArtists.map(artist => <div className={styles.artist} key={artist}>{artist}</div>)}</div>
                    <h3>Top States:</h3>
                    <p>These are the top 10 states where your top Spotify artists have performed the most using the SongKick database</p> 
                    <div className={styles.graph}>
                        <div className={styles.statelist}>{top.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={top}/>
                    </div>
                    <h3>Bottom States:</h3>
                    <p>These are the bottom 10 states where your top Spotify artists have performed the least using the SongKick database</p> 

                    <div className={styles.graph}>
                        <div className={styles.statelist}>{bottom.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={bottom}/>
                    </div> 
                    
                    
                </div>
            </div>
        )
    }
}

export default Example;

// <h3>Top Genres:</h3>
// <div>{topGenres.map(genre => <div key={genre[0]}>{genre[0]}: {genre[1]}</div>)}</div>
/*
<div className={styles.second}>
                <Navbar />
                <div className={styles.userinfo}>
                    <h2>You have successfully connected with Spotify</h2>
                    <h3>Your Top Artists:</h3>
                    <div>{topArtists.map(artist => <div className={styles.artist} key={artist.name}>{artist.name}</div>)}</div>
                    <h3>Top States:</h3>
                    <p>These are the top 10 states where your top Spotify artists have performed the most using the SongKick database</p> 
                    <div className={styles.graph}>
                        <div className={styles.statelist}>{states.top10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={states.top10}/>
                    </div>
                    <h3>Bottom States:</h3>
                    <p>These are the bottom 10 states where your top Spotify artists have performed the least using the SongKick database</p> 
                    <div className={styles.graph}>
                        <div className={styles.statelist}>{states.bottom10.map(state => <div key={state[0]}>{state[0]}: {state[1]}</div>)}</div>
                        <Bar data={states.bottom10}/>
                    </div> 
                    
                    
                </div>
            </div>
*/