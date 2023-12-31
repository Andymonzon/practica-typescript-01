import { useCharacters } from '../../hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const { setFilters, setClose } = useCharacters()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    setFilters((prevState) => ({
      ...prevState,
      search: value
    }))
  }

  const openClose = () => {
    setClose(false)
  }

  return (
    <header className="w-full px-16 py-5 flex justify-between">
        <p className="text-3xl">Rick and Morty</p>
      <nav className="flex gap-5">
        <input
          type="text"
          className="bg-zinc-300 rounded-md px-2 py-1 outline-none"
          onChange={(e) => { handleSearch(e) }}
        />
        <button className="text-2xl" onClick={openClose}>
          <FontAwesomeIcon icon={faHeart} color='red'/>
        </button>
      </nav>
    </header>
  )
}
