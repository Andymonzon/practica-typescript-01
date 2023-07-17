import { type Personajes } from '../models/characters.models'

export const useGetCharacters = async (): Promise<Personajes[]> => {
  const URL = 'https://rickandmortyapi.com/api/character'
  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Error fetching data from API')
    const data = await response.json()
    return data.results
  } catch (error) {
    throw new Error('Error fetching data from API')
  }
}
