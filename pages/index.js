import Head from 'next/head'
import Image from 'next/image'
import PageTitle from "../components/Layout/PageTitle";
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import Navbar from '../components/navigation/navbar'

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('banner button')
  }

  return (
    <div className={styles.container}>
      <PageTitle page="Home" />
      <Navbar userName='info@parasol.com' />
      <main className={styles.main}>
        <Banner buttonText="Let's Begin!" handleOnClick={handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
        <Image src='/static/hero-5-bg.png' width={660} height={560} />
        </div>
      </main>
    </div>
  )
}
