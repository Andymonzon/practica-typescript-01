import { type Personajes } from './models'

export interface CharactersContextType {
  characters: Personajes[]
}

export enum OptionFilters {
  status = 'status',
  species = 'species',
  gender = 'gender',
  origin = 'origin'
}
