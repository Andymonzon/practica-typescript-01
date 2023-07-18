import { type Personajes } from './models'

interface Filters {
  categoryStatus: string
  categoryGender: string
  categorySpecies: string
  search: string
}

export interface CharactersContextType {
  characters: Personajes[]
  setCharacters: (value: Personajes[]) => void
  filters: Filters
  setFilters: (cb: (value: T) => T) => void
  close: boolean
  setClose: (value: boolean) => void
  likeCharacter: Personajes[]
  setLikeCharacter: (value: Personajes[]) => void
}

export enum OptionFilters {
  status = 'status',
  species = 'species',
  gender = 'gender',
  origin = 'origin',
  all = 'all'
}
