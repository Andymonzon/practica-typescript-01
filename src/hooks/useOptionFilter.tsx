import { useMemo } from 'react'
import { OptionFilters } from '../types.d'
import { useCharacters } from './useCharactersContext'

export const useOptionFilter = (filter: OptionFilters) => {
  const { characters } = useCharacters()

  const newDataArray = useMemo(() => {
    const filterMap = () => {
      if (filter === OptionFilters.status) {
        return characters.map(option => option.status)
      }
      if (filter === OptionFilters.gender) {
        return characters.map(option => option.gender)
      }
      if (filter === OptionFilters.species) {
        return characters.map(option => option.species)
      }
    }

    const newData = new Set(filterMap())
    return Array.from(newData)
  }, [characters, filter])

  return { newDataArray }
}
