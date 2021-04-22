import React from 'react' 
import Navbar from './navbar.js'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'


class PredictionModel extends React.Component {

    render() {

            return (
            <div>
                <Navbar />
                <div className={styles.about}>
                    <br />   
                    <h2 className={styles.title}>Our Prediction Model</h2>
                    <br />
                    <div className={styles.video}>
                        <ReactPlayer
                            className={styles.reactplayer}
                            url="https://youtu.be/xIui6XBFKHU"
                            controls="true" 
                        />
                    </div>
                    
                    <div className={styles.prediction}>
                        <h1>Purpose</h1>
                        <p>The model is created based on the user's top artists and the SongKick database. The model will look at a specific artist and then using the SongKick API will look at all past cities that the artist has performed in. The model predicts the city that the artist will mostly likely perform next. </p>
                        <br />
                        <h1>How it Works</h1>
                        <p>The predictions are made with a predictive model and machine learning that uses previous data to predict an upcoming event. For our model we used a logistic regression model using these steps: </p>
                        <em><strong>
                        <p>1. Import the necessary data sets (top artists and their past events)</p>
                        <p>2. Test the model for accuracy and precision based on predictive analysis</p>
                        <p>3. Building a heat map using the model and sci kit to predict upcoming events</p>
                        </strong></em>
                    </div>
                </div>
            </div>
        )
    }
}

export default PredictionModel;