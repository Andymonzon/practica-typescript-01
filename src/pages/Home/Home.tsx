import { useCharacters, useLike, useFilter } from '../../hooks'
import { AsideFilters, ContainerCharacters } from './components'

export const Home = () => {
  const { characters } = useCharacters()
  const { handleLike, verifyLike } = useLike()
  const { filterCharacters } = useFilter()

  const filterProducts = filterCharacters(characters)

  return (
    <div className="flex">
      <aside className="w-[34%] flex justify-center">
        <AsideFilters />
      </aside>
      <section className={
        filterProducts.length > 0
          ? 'w-2/3 grid grid-cols-[repeat(auto-fit,minmax(auto,160px))] gap-6 place-content-center py-5'
          : 'w-2/3 grid place-content-center'
      }>
        {filterProducts.length > 0
          ? (
              filterProducts.map((character) => (
            <ContainerCharacters
              key={character.id}
              character={character}
              handleLike={handleLike}
              color={verifyLike(character)}
            />
              ))
            )
          : (
          <h3 className='text-4xl w-full'>No character</h3>
            )}
      </section>
    </div>
  )
}
