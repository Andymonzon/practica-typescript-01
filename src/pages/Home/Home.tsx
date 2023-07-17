import { useEffect, useState } from 'react'
import { useCharacters, useGetCharacters } from '../../hooks'
import { AsideFilters, ContainerCharacters } from './components'
import { type Personajes } from '../../models'

export const Home = () => {
  const [likeCharacter, setLikeCharacter] = useState<Personajes[]>([])
  // const [color, setColor] = useState('#666')

  const { characters, setCharacters } = useCharacters()

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const characters = await useGetCharacters()
        setCharacters(characters)
      } catch (error) {
        console.error(error)
      }
    }
    getCharacters()
  }, [])

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

  const verifyLike = (character: Personajes): string => {
    if (likeCharacter.find((item) => item.id === character.id) != null) {
      return 'red'
    } else {
      return '#666'
    }
  }

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

  return (
    <div className="flex">
      <aside className="w-[34%] flex justify-center">
        <AsideFilters />
      </aside>
      <section className="w-2/3 grid grid-cols-[repeat(auto-fit,minmax(auto,160px))] gap-6 place-content-center py-5">
        {characters.map((character) => (
          <ContainerCharacters
            key={character.id}
            character={character}
            handleLike={handleLike}
            color={verifyLike(character)}
          />
        ))}
      </section>
    </div>
  )
}
