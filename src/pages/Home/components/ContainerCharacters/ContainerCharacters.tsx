import { type Personajes } from '../../../../models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface Props {
  character: Personajes
  handleLike: (character: Personajes) => void
  color: string
}

export const ContainerCharacters: React.FC<Props> = ({
  character,
  handleLike,
  color
}) => {
  return (
    <div className="bg-zinc-100 shadow-md shadow-zinc-300 p-2 rounded-md">
      <img className="w-40 h-40" src={character.image} alt={character.name} />
      <div className="flex flex-col my-3">
        <p className="font-bold">{character.name}</p>
        <p className="text-xs">Status: {character.status}</p>
      </div>
      <div className='text-center'>
        <button
          onClick={() => {
            handleLike(character)
          }}
        >
          <FontAwesomeIcon icon={faHeart} color={color} />
        </button>
      </div>
    </div>
  )
}
