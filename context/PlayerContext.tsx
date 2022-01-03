import React, {
  PropsWithChildren,
  useCallback,
  useState,
  useContext,
} from 'react'

import AdventureLogContext from './AdventureLogContext'

interface PlayerContext {
  metersWalked: number
  travelling: boolean
  walkForOneMinute?: () => void
}

const PlayerContext = React.createContext<PlayerContext>({
  metersWalked: 0,
  travelling: false,
})

export const PlayerProvider = ({ children }: PropsWithChildren<{}>) => {
  const { addAdventureLog } = useContext(AdventureLogContext)

  const [metersWalked, setMetersWalked] = useState(0)
  const [walking, setWalking] = useState(false)

  const walkForOneMinute = useCallback(() => {
    if (walking) return

    if (metersWalked === 0)
      addAdventureLog('You begin exploring the surrounding forest...')

    const walkingInterval = setInterval(() => {
      setMetersWalked((currentMetersWalked) => currentMetersWalked + 1.4)
    }, 1000)

    setWalking(true)

    setTimeout(() => {
      clearInterval(walkingInterval)
      setWalking(false)
    }, 60000)
  }, [metersWalked, walking])

  return (
    <PlayerContext.Provider
      value={{ metersWalked, travelling: walking, walkForOneMinute }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContext
