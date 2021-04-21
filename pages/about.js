import React from 'react' 
import styles from '../styles/Home.module.css'
import Navbar from './navbar.js'
import Image from 'next/image'
import Link from 'next/link'




class About extends React.Component {

    render() {

            return (
            <div>    
                <Navbar />
                <div className={styles.about}>
                    <br />   
                    <h2 className={styles.title}>About</h2>
                    <p className={styles.information}>Wrestle the Pigeon was created by Aliana, David, Nour, and Shravani for their capstone project at the University of Arizona. The project consists of a dynamic website that is created with Next.js and deployed using Vercel. Upon using the website there are two main API calls that display personalized information from the user. The first API call is made to the user's Spotify profile after undergoing an authorization process in order to access the top artists of a user. This information is then passed to the 
                    <Link href="https://www.songkick.com/developer"><span  className={styles.songkicklink}> SongKick API</span></Link>
                    . SongKick provides live music data and for this project we primarily focused on the past events of our user's top artists in order to make our graphs and prediction model.</p>
                    <br />
                    <h2 className={styles.title}>Meet the Team</h2>
                    <br />
                    <div className={styles.team}>
                        <h3>Aliana Campas</h3>
                        <p>Aliana Campas is an ISTA major at the University of Arizona with a minor in computer science. Throughout the ISTA major she has taken several courses that focus on web development and is proficient in HTML, CSS, and Javascript. Aliana is also familiar with creating dynamic websites through the React framework that utilizes APIs to get information from specific sources. </p>
                        <br />
                        <h3>Nour Tanbal</h3>
                        <p>Nour Tanbal is working towards a Bachelor of Science in Information Science and Technology with a minor in Computer Science at the University of Arizona. Throughout the major, she has taken several courses in programming, data structures and algorithms, data visualization, and statistics. Nour is familiar with programming languages such as Python, Java, JavaScript, C#, Assembly Language, and R.</p>
                        <br />
                        <h3>David Fimbres</h3>
                        <p>David is majoring in ISTA and minoring in Computer Science  at the University of Arizona and has a background in web development. David is familiar with Full Stack web development and making sure that external sources such as API calls run smoothly with website models that handle user data.</p>
                        <br />
                        <h3>Shravani Malipeddi</h3>
                        <p>Shravani Malipeddi is completing a Bachelors of Arts in ISTA at the University of Arizona. Through the major, she has taken courses that have helped her understand the basics of the project regarding framework and APIs better. She has also gained experience in data science ,statistics, and design from previous jobs and internships.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
