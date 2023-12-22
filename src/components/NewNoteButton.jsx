import plus_icon from '../assets/icons/plus-large-svgrepo-com.svg'
import '../styles/NewNoteButton.css'
import { Link } from 'react-router-dom'

const NewNoteButton = () => {
  return (
    <Link to="new-note" className="new_note_button">
        <img className='plus_icon' src={plus_icon} alt="plus_icon" />
    </Link>
  )
}

export default NewNoteButton