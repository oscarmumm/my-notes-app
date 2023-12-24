import logo from '../assets/logo/notes-note-svgrepo-com.svg'
import NewNoteButton from './NewNoteButton'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='title_and_logo'>
            <h1 className='main_title'>Mis Notas</h1>
            <img className='logo' src={logo} alt="logo" />
        </div>
        <NewNoteButton />
    </div>
  )
}

export default Header