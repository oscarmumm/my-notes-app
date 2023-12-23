import { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Modal from "./Modal";
import "../styles/NotesList.css";

const NotesList = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const [showModal, setShowModal] = useState(false);
    const [noteToAction, setNoteToAction] = useState('')

    const actionOnNote = (el) => {
      setShowModal(true)
      setNoteToAction(el)
    }

    const remove = () => {
      setNotes(notes.filter((note) => note.id !== noteToAction.id))
      setShowModal(false)
    }

    const cancel = () => {
      setShowModal(false)
    }

    return (
        <ul className="notes_list">
            {notes.map((el) => (
                <li
                    key={el.id}
                    className="note_in_list"
                    onClick={() => actionOnNote(el)}
                >
                    <h4 className="note_in_list_title">{el.title}</h4>
                    <p className="note_in_list_body">{el.body}</p>
                </li>
            ))}
            {showModal ? (
                <Modal remove={remove} cancel={cancel} noteToEdit={noteToAction} />
            ) : null}
        </ul>
    );
};

export default NotesList;
