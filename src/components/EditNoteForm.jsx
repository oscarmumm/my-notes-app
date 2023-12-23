import "../styles/NewNoteForm.css";
import { Link } from "react-router-dom";
import back_icon from "../assets/icons/back-svgrepo-com.svg";
import { useState, useContext, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";

const EditNoteForm = ({noteToEdit}) => {

    const {notes, setNotes} = useContext(NotesContext);

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        console.log(noteToEdit)
        // setTitle(noteToEdit.title)
        // setBody(noteToEdit.body)
    }, [noteToEdit])

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
        console.log(notes)
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
                    placeholder="Title"
                    />
                <textarea
                    className="note_template_form_textarea"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    name=""
                    placeholder="your note"
                ></textarea>
                <button className="save_button" onClick={(e) => saveNote(e)}>Save</button>
            </form>
        </div>
    );
};

export default EditNoteForm;