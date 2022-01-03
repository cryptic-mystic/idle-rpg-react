import React, { useContext } from 'react'

import Button from '~/components/Button'
import PlayerPanel from '~/components/PlayerPanel'
import AdventureLogContext from '~/context/AdventureLogContext'
import PlayerContext from '~/context/PlayerContext'

export default function Home() {
  const { walkForOneMinute, travelling } = useContext(PlayerContext)
  const { log } = useContext(AdventureLogContext)

  return (
    <div className="container mx-auto py-10 px-10 relative">
      <h1 className="text-3xl text-center font-bold mb-12">
        🧙‍♂️ Welcome to Idle RPG 🧙‍♂️
      </h1>

      <div className="grid grid-cols-3 gap-x-12">
        <PlayerPanel />
        <div className="flex flex-col grow-0 align-middle">
          <h2 className="text-lg text-center font-bold mb-8">
            Action Context Menu
          </h2>
          <div className="flex justify-center">
            <Button
              className="w-36"
              onClick={walkForOneMinute}
              disabled={travelling}
            >
              Walk
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-center font-bold mb-8">Adventure Log</h2>
          {log?.map(({ id, text }) => (
            <p key={id} className="mb-4">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
