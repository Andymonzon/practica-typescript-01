import { CharactersContext } from '../context'
import { useContext } from 'react'

export const useCharacters = () => {
  const context = useContext(CharactersContext)

  if (context === undefined) {
    throw new Error('useCharacter must be used within a CharacterProvider')
  }

  return context
}
