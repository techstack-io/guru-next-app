// import Head from "next/head";
import '../styles/style.scss'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  {/* <Head> */}
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  </Head> */}
  </>
  )
}

export default MyApp
