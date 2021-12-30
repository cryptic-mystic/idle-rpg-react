import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className='text-slate-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
