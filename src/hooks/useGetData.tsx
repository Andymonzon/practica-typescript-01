import { type Personajes } from '../models/characters.models'
import { useEffect, useState } from 'react'

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<Personajes[]>([])
  const URL = 'https://rickandmortyapi.com/api/character'
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) throw new Error('Error fetching data from API')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        throw new Error('Error fetching data from API')
      }
    }
    getCharacters()
  }, [URL])

  return {
    characters
  }
}
