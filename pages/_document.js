import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )
    
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Valentin Georgiev | Software Engineer" />
          <meta name="description" content="Valentin Georgiev - Software Engineer - Javascript, Reactjs, Nextjs" />

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://valgeorgiev.com" />
          <meta property="og:title" content="Valentin Georgiev | Software Engineer" />
          <meta property="og:description" content="Valentin Georgiev - Software Engineer - Javascript, Reactjs, Nextjs" />
          <meta property="og:image" content="https://valgeorgiev.com/images/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://valgeorgiev.com" />
          <meta property="twitter:title" content="Valentin Georgiev | Software Engineer" />
          <meta property="twitter:description" content="Valentin Georgiev - Software Engineer - Javascript, Reactjs, Nextjs" />
          <meta property="twitter:image" content="https://valgeorgiev.com/images/social.png" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument