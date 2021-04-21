import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src = "/MainPage.jpg"
        layout = "fill"
      />
      <Head>
        <title>Wrestle the Pigeon</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Wrestle the Pigeon</h1>
        <p className={styles.information}>Wrestle the Pigeon demonstrates how the data you provide through Spotify can be used to make assumptions and predictions based on your listening history. We are focused on creating models and visualizations of users based on their Spotify listening habits and providing suggestions on where we think the user should live and not live based on their most listened to artists. As a team, we noticed more and more data is being collected about us as users, even if it is not explicitly written or said. We hope to learn more and inform users about what general information can be predicted about them using something as simple as their Spotify listening habits.</p>
        <h1 className={styles.interested}>Interested in your Spotify data?</h1>

        <div>
          <Link href="/api/authenticate">
          <button className={styles.connectbutton}>Connect Your Spotify</button>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>

        <Image
          src="/songkick_wordmark_logo_white.png"
          alt="SongKick logo."
          width = "140"
          height = "48"
        />
          <div className={styles.foottext}>
          Created By: Aliana, David, Nour, Shravani
          <br />
          For their 2021 Senior Capstone 🎓
          </div>
      </footer>
    </div>
  )
}

//<h3>Deploy &rarr;</h3>
