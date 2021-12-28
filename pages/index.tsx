import React from 'react'
import Head from 'next/head'

class PlayerCharacter {

}

export default function Home() {
  return (
    <div className="container">
      <Head>Idle RPG React</Head>
      <h1 className="text-3xl font-bold underline">
        Welcome to Idle RPG 🧙‍♂️
      </h1>

      <button>Walk</button>
    </div>
  )
}
