import { createContext, useState } from 'react'
import { type Filters, type CharactersContextType } from '../types.d'
import { useGetCharacters } from '../hooks'

const initialFilters: Filters = {
  categoryStatus: '',
  categoryGender: '',
  categorySpecies: '',
  search: ''
}

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
  setCharacters: () => {},
  filters: initialFilters,
  setFilters: () => {}
})

interface Props {
  children: React.ReactNode
}

export const CharactersContextProvider: React.FC<Props> = ({ children }) => {
  const { characters, setCharacters } = useGetCharacters()
  const [filters, setFilters] = useState({
    categoryStatus: 'all',
    categoryGender: 'all',
    categorySpecies: 'all',
    search: ''
  })

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        filters,
        setFilters
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
