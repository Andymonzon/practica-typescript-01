import { useEffect } from 'react'
import { type Personajes } from './../models'
import { useCharacters } from '.'

export const useLike = () => {
  const { likeCharacter, setLikeCharacter } = useCharacters()

  useEffect(() => {
    const storedLike: string | null = localStorage.getItem('like')

    if (storedLike !== null) {
      const isLiked: Personajes[] = JSON.parse(storedLike)
      isLiked.forEach((item) => {
        if (likeCharacter.find((like) => like.id === item.id) == null) {
          setLikeCharacter([...likeCharacter, item])
        }
      })
    }
  }, [likeCharacter])

  const handleLike = (character: Personajes) => {
    if (likeCharacter.find((item) => item.id === character.id) != null) {
      const removeLike = likeCharacter.filter(
        (item) => item.id !== character.id
      )
      localStorage.setItem('like', JSON.stringify(removeLike))
      setLikeCharacter(removeLike)
      return
    }
    const liked = [...likeCharacter, character]
    setLikeCharacter(liked)
    localStorage.setItem('like', JSON.stringify(liked))
  }

  const verifyLike = (character: Personajes): string => {
    if (likeCharacter.find((item) => item.id === character.id) != null) {
      return 'red'
    } else {
      return '#666'
    }
  }

  return {
    handleLike,
    verifyLike,
    likeCharacter
  }
}
