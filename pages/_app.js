import '../scss/Globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DHN2E0YZ2V" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DHN2E0YZ2V', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
