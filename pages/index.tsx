import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Progress from '~/common/components/Progress'

export default function Home() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((value) => {
        if (value >= 100) return 0
        return value + 10
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="container mx-auto py-10 px-10 relative">
      <Head>Idle RPG React</Head>
      <h1 className="text-2xl text-center font-bold underline mb-8">
        Welcome to Idle RPG 🧙‍♂️
      </h1>

      <div className="grid grid-cols-3 gap-x-12">
        <div>
          <h2 className="text-lg text-center font-bold">
            Player Stats / Equipment
          </h2>
          <div className="mb-4">
            <h3 className="text-md font-bold">Health</h3>
            <Progress
              percentage={percentage}
              bgClassName={percentage < 20 ? 'bg-rose-300' : 'bg-green-300'}
              innerClassName={percentage < 20 ? 'bg-rose-700' : 'bg-green-700'}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-md font-bold">XP</h3>
            <Progress
              percentage={percentage}
              bgClassName="bg-blue-300"
              innerClassName="bg-blue-700"
            />
          </div>
        </div>
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
