import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { PlayerProvider } from '~/context/PlayerContext'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>🧙‍♂️ Idle RPG</title>
      </Head>
      <PlayerProvider>
        <Component {...pageProps} />
      </PlayerProvider>
    </>
  )
}

export default MyApp
