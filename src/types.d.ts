import { type Personajes } from './models'

export interface CharactersContextType {
  characters: Personajes[]
  setCharacters: (value: Personajes[]) => void
}

export enum OptionFilters {
  status = 'status',
  species = 'species',
  gender = 'gender',
  origin = 'origin'
}
