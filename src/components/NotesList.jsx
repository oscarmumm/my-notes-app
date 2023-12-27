import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Modal from "./Modal";
import "../styles/NotesList.css";

//VER COMO COMPATIBILIZAR EL USECONTEXT CON EL LOCAL STORAGE
// const getLocalData = () => {
//     let notes = localStorage.getItem('saved-notes');
//     if (notes) {
//         return JSON.parse(localStorage.getItem('saved-notes'))
//     } else {
//         return [];
//     }
// }

const NotesList = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const [showModal, setShowModal] = useState(false);
    const [noteToAction, setNoteToAction] = useState("");

    const actionOnNote = (el) => {
        setShowModal(true);
        setNoteToAction(el);
    };

    const remove = () => {
        setNotes(notes.filter((note) => note.id !== noteToAction.id));
        setShowModal(false);
    };

    const cancel = () => {
        setShowModal(false);
    };

    useEffect(() => {
        localStorage.setItem('saved-notes', JSON.stringify(notes))
    }, [notes])

    return (
        <ul className="notes_list">
            {notes.length < 1 ? (
                <h2 className="no_saved_notes_title">No hay notas guardadas</h2>
            ) : (
                notes.map((el) => (
                    <li
                        key={el.id}
                        className="note_in_list"
                        onClick={() => actionOnNote(el)}
                    >
                        <h4 className="note_in_list_title">{el.title}</h4>
                        <p className="note_in_list_body">{el.body}</p>
                    </li>
                ))
            )}
            {showModal ? (
                <Modal
                    remove={remove}
                    cancel={cancel}
                    noteToEdit={noteToAction}
                />
            ) : null}
        </ul>
    );
};

export default NotesList;
