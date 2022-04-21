import Head from 'next/head'
import PageTitle from "../components/Layout/PageTitle";
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('banner button')
  }

  return (
    <div className={styles.container}>
      <PageTitle page="Home" />
      <main className={styles.main}>
        <Banner buttonText="Let's Begin!" handleOnClick={handleOnBannerBtnClick}/>
      </main>
    </div>
  )
}
