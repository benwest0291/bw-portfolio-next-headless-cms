import '../scss/Globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import Layout from '../components/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
