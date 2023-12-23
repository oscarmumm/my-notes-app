import { NotesContext } from '../contexts/NotesContext'
import '../styles/NotesList.css'
import { useContext } from 'react'

const NotesList = () => {
    const {notes, setNotes} = useContext(NotesContext)
  return (
    <ul className="notes_list">
        {notes.map((el) => (
            <li key={el.id} className='note_in_list'>
                <h4 className='note_in_list_title'>{el.title}</h4>
                <p className='note_in_list_body'>{el.body}</p>
            </li>
        ))}
    </ul>
  )
}

export default NotesList