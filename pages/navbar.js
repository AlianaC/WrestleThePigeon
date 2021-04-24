import React from 'react' 
import styles from '../styles/Home.module.css'
import Link from 'next/link'


class Navbar extends React.Component {

    render() {

        return (
            <div className={styles.navbar}>
                <Link href="/"><p>HOME</p></Link>
                <Link href="/about"><p>ABOUT</p></Link>
                <Link href="/predictionmodel"><p>PREDICTION MODEL</p></Link>
                <Link href="/example"><p>EXAMPLE SPOTIFY</p></Link>
            </div>
        )
    }
}

export default Navbar;