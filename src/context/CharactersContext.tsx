import { createContext, useState } from 'react'
import { type Filters, type CharactersContextType } from '../types.d'
import { useGetCharacters } from '../hooks'
import { type Personajes } from '../models'

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
  setFilters: () => {},
  close: true,
  setClose: () => {},
  likeCharacter: [],
  setLikeCharacter: () => {}
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
  const [close, setClose] = useState(true)
  const [likeCharacter, setLikeCharacter] = useState<Personajes[]>([])

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        filters,
        setFilters,
        setClose,
        close,
        setLikeCharacter,
        likeCharacter
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
