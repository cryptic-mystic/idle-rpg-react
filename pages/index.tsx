import React from 'react'

import Button from '~/components/Button'
import PlayerPanel from '~/components/PlayerPanel'

export default function Home() {
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
            <Button className="w-36">Walk</Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-center font-bold mb-8">
            Textual Display
          </h2>
          <p>
            {
              "You awake naked in a forest. You're able to see a mountain through the trees. TODO Character starts in a mission by walking, discovers a cave to make their first home. From there, home is where they rest in between missions."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
