import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { PlayerProvider } from '~/context/PlayerContext'
import { AdventureLogProvider } from '~/context/AdventureLogContext'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>🧙‍♂️ Idle RPG</title>
      </Head>
      <AdventureLogProvider>
        <PlayerProvider>
          <Component {...pageProps} />
        </PlayerProvider>
      </AdventureLogProvider>
    </>
  )
}

export default MyApp
