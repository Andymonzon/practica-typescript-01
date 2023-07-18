import { type Personajes } from '../../models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useCharacters, useLike } from '../../hooks'

export const Modal = () => {
  const { setClose, close } = useCharacters()
  const { handleLike } = useLike()

  const myLikes = localStorage.getItem('like')
  const likes: Personajes[] = myLikes != null ? JSON.parse(myLikes) : []

  const closeModal = () => {
    setClose(true)
  }

  return (
    <>
      {close
        ? null
        : (
        <div className="w-full h-screen bg-zinc-800/70 fixed top-0 left-0 flex items-center justify-center">
          <div className="bg-white w-1/2 h-5/6">
            <header className="flex justify-between items-center p-3">
              <p className="text-2xl font-bold">My likes</p>
              <button onClick={closeModal}>
                <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
              </button>
            </header>
            <main className="h-[89%] overflow-auto">
              {likes.map((like) => (
                <div key={like.id} className="flex items-center gap-2 p-2">
                  <img className="w-20 h-20" src={like.image} alt={like.name} />
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col text-sm">
                      <p className="font-bold">{like.name}</p>
                      <p>Status: {like.status}</p>
                      <p>Gender: {like.gender}</p>
                    </div>
                    <button
                      className="text-2xl text-red-500 p-2"
                      onClick={() => {
                        handleLike(like)
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
          )}
    </>
  )
}
