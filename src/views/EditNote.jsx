import EditNoteForm from "../components/EditNoteForm.jsx";

const EditNote = () => {
    const {noteToEdit} = useLocation();

    return (
        <div>
            <p>{noteToEdit}</p>
            <EditNoteForm noteToEdit={noteToEdit} />
        </div>
    );
};

export default EditNote;
