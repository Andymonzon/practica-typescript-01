import { useCharacters } from '.'
import { type Personajes } from '../models'
import { type Filters, OptionFilters } from '../types.d'

export const useFilter = () => {
  const { filters, setFilters } = useCharacters()

  const filterCharacters = (characters: Personajes[]) => {
    return characters.filter((character) => {
      return (
        (filters.categoryStatus === 'all' ||
          character.status === filters.categoryStatus) &&
        (filters.categoryGender === 'all' ||
          character.gender === filters.categoryGender) &&
        (filters.categorySpecies === 'all' ||
          character.species === filters.categorySpecies) &&
        (filters.search === '' ||
          character.name.toLocaleLowerCase().includes(filters.search))
      )
    })
  }

  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLSelectElement>,
    category: string
  ) => {
    if (category === OptionFilters.status) {
      setFilters((prevState: Filters) => ({
        ...prevState,
        categoryStatus: e.target.value
      }))
      return
    }
    if (category === OptionFilters.gender) {
      setFilters((prevState: Filters) => ({
        ...prevState,
        categoryGender: e.target.value
      }))
      return
    }
    if (category === OptionFilters.species) {
      setFilters((prevState: Filters) => ({
        ...prevState,
        categorySpecies: e.target.value
      }))
    }
  }

  return {
    filterCharacters,
    handleChangeFilter
  }
}
