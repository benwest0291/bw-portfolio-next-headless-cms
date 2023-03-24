import Head from 'next/head'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ben West</title>
        <meta name="description" content="Ben West is a Freelance Web Developer from Maidstone Kent! Get in touch to discuss your amazing project ideas 💡" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no"></meta>

        <meta property="og:title" content="Ben West Dev" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content="Ben West is a Freelance Web Developer from Maidstone Kent! Get in touch to discuss your amazing project ideas 💡" />
        <meta property="og:site_name" content="Ben West Dev" />

        <meta name="twitter:site" content="@design_ben" />
        <meta name="twitter:title" content="Ben West Is A Freelance Developer" />
        <meta name="twitter:description" content="Ben West is a Freelance Web Developer from Maidstone Kent! Get in touch to discuss your amazing project ideas 💡" />
        <meta name="twitter:creator" content="@design_ben" />

        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
