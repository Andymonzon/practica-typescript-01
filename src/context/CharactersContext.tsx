import { createContext } from 'react'
import { type CharactersContextType } from '../types'
import { useGetCharacters } from '../hooks'

export const CharactersContext = createContext<CharactersContextType>({
  characters: []
})

interface Props {
  children: React.ReactNode
}

export const CharactersContextProvider: React.FC<Props> = ({ children }) => {
  const { characters } = useGetCharacters()

  return (
        <CharactersContext.Provider value={{
          characters
        }}>
            {children}
        </CharactersContext.Provider>
  )
}
