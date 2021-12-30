import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>🧙‍♂️ Idle RPG</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
