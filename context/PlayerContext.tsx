import React, { PropsWithChildren, useCallback, useState } from 'react'

interface PlayerContext {
  metersWalked: number
  travelling: boolean,
  walkForOneMinute?: () => void
}

const PlayerContext = React.createContext<PlayerContext>({
  metersWalked: 0,
  travelling: false
})

export const PlayerProvider = ({ children }: PropsWithChildren<{}>) => {
  const [metersWalked, setMetersWalked] = useState(0)
  const [walking, setWalking] = useState(false)

  const walkForOneMinute = useCallback(() => {
    const walkingInterval = setInterval(() => {
      setMetersWalked((currentMetersWalked) => currentMetersWalked + 1.4)
    }, 1000)

    setWalking(true)

    setTimeout(() => {
      clearInterval(walkingInterval)
      setWalking(false)
    }, 60000)
  }, [])

  return (
    <PlayerContext.Provider value={{ metersWalked, travelling: walking, walkForOneMinute }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContext
