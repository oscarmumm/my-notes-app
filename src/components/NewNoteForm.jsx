import "../styles/NewNoteForm.css";
import { Link } from "react-router-dom";
import back_icon from "../assets/icons/back-svgrepo-com.svg";
import { useState, useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { useNavigate } from "react-router-dom";

const NewNoteForm = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const navigate = useNavigate()

    const saveNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes, {
                id: Date.now().toString(),
                title: title,
                body: body
            }
        ])
        setTitle('')
        setBody('')
        navigate("/")
    }

    return (
        <div className="note_template_container">
            <div className="note_template_header">
                <Link to="/" className="back_button">
                    <img className="back_icon" src={back_icon} alt="" />
                </Link>
            </div>
            <form className="note_template_form">
                <input
                    className="note_template_form_title_input"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Título..."
                    />
                <textarea
                    className="note_template_form_textarea"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    name=""
                    placeholder="Escribe tu nota..."
                ></textarea>
                <button to="/" className="save_button" onClick={(e) => saveNote(e)}>Guardar</button>
            </form>
        </div>
    );
};

export default NewNoteForm;
