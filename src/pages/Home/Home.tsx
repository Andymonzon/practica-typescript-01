import { useCharacters, useLike } from '../../hooks'
import { AsideFilters, ContainerCharacters } from './components'

export const Home = () => {
  const { characters } = useCharacters()
  const { handleLike, verifyLike } = useLike()

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
