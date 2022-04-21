import Head from 'next/head'
import PageTitle from "../components/Layout/PageTitle";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageTitle page="Home" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Guru
        </h1>
      </main>
    </div>
  )
}
