import React, { useEffect, useState } from 'react'

import Progress from '~/components/Progress'

const PlayerPanel = () => {
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
    <div>
      <h2 className="text-lg text-center font-bold mb-8">
        {/* TODO Maybe this can be an editable input with the players name */}
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
  )
}

export default PlayerPanel
