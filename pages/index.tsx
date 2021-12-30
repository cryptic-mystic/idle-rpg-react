import React from 'react'
import Head from 'next/head'

import PlayerPanel from '~/components/PlayerPanel'

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-10 relative">
      <Head>Idle RPG React</Head>
      <h1 className="text-2xl text-center font-bold underline mb-8">
        Welcome to Idle RPG 🧙‍♂️
      </h1>

      <div className="grid grid-cols-3 gap-x-12">
        <PlayerPanel />
        <div>
          <h2 className="text-lg text-center font-bold">Action Context Menu</h2>
        </div>
        <div>
          <h2 className="text-lg text-center font-bold">Textual Display</h2>
        </div>
      </div>
    </div>
  )
}
