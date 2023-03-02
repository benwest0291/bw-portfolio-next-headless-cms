import Head from 'next/head'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Layout = ( {children} ) => {
  return (
    <>
      <Head>
        <title>Ben West</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="container">
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout
