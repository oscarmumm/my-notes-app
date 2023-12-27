import "../styles/NewNoteForm.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import back_icon from "../assets/icons/back-svgrepo-com.svg";
import { useState, useContext, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";
import EmptyTitleModal from "./EmptyTitleModal";

const EditNoteForm = () => {
    const navigate = useNavigate();
    const { notes, setNotes } = useContext(NotesContext);
    const { noteToEdit } = useLocation().state;

    const [showEmptyTitleModal, setShowEmptyTitleModal] = useState(false);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setTitle(noteToEdit.title);
        setBody(noteToEdit.body);
        setId(noteToEdit.id);
    }, []);

    const saveEditNote = (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            setShowEmptyTitleModal(true);
        } else {
            let tempNotesArr = notes;
            tempNotesArr.map((el) => {
                if (el.id === id) {
                    el.title = title;
                    el.body = body;
                }
            });
            setNotes(tempNotesArr);
            setTitle("");
            setBody("");
            navigate("/");
        }
    };

    const closeModal = () => {
        setShowEmptyTitleModal(false);
    };

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
                    placeholder="Escribe tu nota.."
                ></textarea>
                <button
                    className="save_button"
                    onClick={(e) => saveEditNote(e)}
                >
                    Guardar
                </button>
            </form>
            {showEmptyTitleModal ? (
                <EmptyTitleModal closeModal={closeModal} />
            ) : null}
        </div>
    );
};

export default EditNoteForm;
