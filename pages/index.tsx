import React, { useEffect, useState } from 'react'
import Head from 'next/head'

// class PlayerCharacter {}

const FULL_PERCENTAGE = 100
const Progress = ({ percentage, bgClassName = 'bg-gray-300', innerClassName = 'bg-gray-700' }: { percentage: number, bgClassName?: string, innerClassName?: string }) => {
  const transformPercentage = FULL_PERCENTAGE - percentage
  return (
    <div className={`loading-bar w-full ${bgClassName} rounded-md`}>
      <div className={`loading-bar-inner transform-gpu ${innerClassName} rounded-md`} style={{ transform: `translateX(-${transformPercentage}%)`}}></div>
    </div>
  )
}

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
      <h1 className="text-2xl text-center font-bold underline">
        Welcome to Idle RPG 🧙‍♂️
      </h1>

      <div className='grid grid-cols-3 gap-x-12'>
        <div>
          Player Stats / Equipment

          <h1 className="text-lg font-bold">
            Health
          </h1>
          <Progress percentage={percentage} bgClassName='bg-rose-300' innerClassName='bg-rose-700' />
          <h1 className="text-lg font-bold">
            XP
          </h1>
          <Progress percentage={percentage} bgClassName='bg-green-300' innerClassName='bg-green-700' />
        </div>
        <div>Action Context Menu</div>
        <div>Textual Display</div>
      </div>
    </div>
  )
}
