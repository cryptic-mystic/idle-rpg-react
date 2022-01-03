import React, {
  PropsWithChildren,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'

import genRandomNumber from '~/common/genRandomNumber'

import AdventureLogContext from './AdventureLogContext'

interface PlayerContext {
  metersWalked: number
  travelling: boolean
  foundHome: boolean
  walkForOneMinute?: () => void
}

const PlayerContext = React.createContext<PlayerContext>({
  metersWalked: 0,
  travelling: false,
  foundHome: false,
})

const FIND_HOME_DISTANCE_METERS = genRandomNumber(120, 60)

export const PlayerProvider = ({ children }: PropsWithChildren<{}>) => {
  const { addAdventureLog } = useContext(AdventureLogContext)

  const [metersWalked, setMetersWalked] = useState(0)
  const [travelling, setTravelling] = useState(false)

  const [foundHome, setFoundHome] = useState(false)

  const walkForOneMinute = useCallback(() => {
    if (travelling) return

    if (metersWalked === 0)
      addAdventureLog('You begin exploring the surrounding forest...')

    const walkingInterval = setInterval(() => {
      setMetersWalked((currentMetersWalked) => currentMetersWalked + 1.4)
    }, 1000)

    setTravelling(true)

    setTimeout(() => {
      clearInterval(walkingInterval)
      setTravelling(false)
    }, 60000 * 2)
  }, [metersWalked, travelling])

  // Looking for a players first home
  useEffect(() => {
    if (metersWalked >= FIND_HOME_DISTANCE_METERS && !foundHome) {
      setFoundHome(true)
      addAdventureLog(
        'You found a cave that should serve as a decent shelter for a while...'
      )
    }
  }, [metersWalked, foundHome])

  return (
    <PlayerContext.Provider
      value={{ metersWalked, travelling, foundHome, walkForOneMinute }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContext
