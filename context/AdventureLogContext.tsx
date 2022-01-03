import React, { PropsWithChildren, useCallback, useState } from 'react'
import { nanoid } from 'nanoid'

type AdventureLog = {
  id: string
  text: string
}

interface AdventureLogContext {
  log: AdventureLog[]
  addAdventureLog: (textToLog: string) => void
}

const AdventureLogContext = React.createContext<AdventureLogContext>({
  log: [],
  addAdventureLog: () => {},
})

const firstEvent = {
  id: nanoid(),
  text: 'You wake up in a forest with next to no food or equipment. Might as well look around for some supplies and shelter.',
}

export const AdventureLogProvider = ({ children }: PropsWithChildren<{}>) => {
  const [log, setLog] = useState<AdventureLog[]>([firstEvent])

  const addAdventureLog = useCallback((text: string) => {
    setLog((logArray) => [{ id: nanoid(), text }, ...logArray])
  }, [])

  return (
    <AdventureLogContext.Provider value={{ log, addAdventureLog }}>
      {children}
    </AdventureLogContext.Provider>
  )
}

export default AdventureLogContext
