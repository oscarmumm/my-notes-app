import { useLocation } from "react-router-dom";
import EditNoteForm from "../components/EditNoteForm.jsx";

const EditNote = () => {
    const {noteToEdit} = useLocation();

    return (
        <div>
            <p style={{color: "#fff"}}>hola {noteToEdit}</p>
            <button onClick={console.log(noteToEdit)}>BOTON</button>
            {/* <EditNoteForm /> */}
            {/* <EditNoteForm noteToEdit={noteToEdit} /> */}
        </div>
    );
};

export default EditNote;
