import Head from 'next/head'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ben West</title>
        <meta name="description" content="Ben West - Front end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no"></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
