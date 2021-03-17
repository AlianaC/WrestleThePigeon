import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wrestle the Pigeon</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Wrestle the Pigeon</h1>

        <div>
          <Link href="/api/authenticate">
          <button>Connect Your Spotify</button>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
          Created By: Aliana, David, Nour, Shravani
          <br />
          For their 2021 Senior Capstone 🎓
      </footer>
    </div>
  )
}

//<h3>Deploy &rarr;</h3>
