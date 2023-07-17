import { createContext, useState } from 'react'
import { type Personajes } from '../models/characters.models'
import { type CharactersContextType } from '../types'

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
  setCharacters: () => {}
})

interface Props {
  children: React.ReactNode
}

export const CharactersContextProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = useState<Personajes[]>([])

  return (
        <CharactersContext.Provider value={{
          characters,
          setCharacters
        }}>
            {children}
        </CharactersContext.Provider>
  )
}
