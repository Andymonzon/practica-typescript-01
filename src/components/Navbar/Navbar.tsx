export const Navbar = () => {
  return (
    <header className="w-full px-16 py-5 flex justify-between">
        <p className="text-3xl">Rick and Morty</p>
      <nav className="flex gap-5">
        <input
          type="text"
          className="bg-zinc-300 rounded-md px-2 py-1 outline-none"
        />
        <button className="rounded-md bg-cyan-500 text-white px-3 py-1">
          Favs
        </button>
      </nav>
    </header>
  )
}
