import React from 'react' 
import Navbar from './navbar.js'
import styles from '../styles/Home.module.css'


class PredictionModel extends React.Component {

    render() {

            return (
            <div>
                <Navbar />
                <div className={styles.about}>
                    <br />   
                    <h2 className={styles.title}>Our Prediction Model</h2>
                    <br />
                    <div className={styles.prediction}>page still in progress</div>
                </div>
            </div>
        )
    }
}

export default PredictionModel;