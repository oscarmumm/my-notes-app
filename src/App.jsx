import Home from "./views/Home";
import NewNote from "./views/NewNote";
import { NotesContext } from "./contexts/NotesContext";
import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import EditNoteForm from "./components/EditNoteForm";


const notesExample = [];

function App() {
    const [notes, setNotes] = useState(notesExample);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <div className="app_container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="new-note" element={<NewNote />} />
                    <Route path="edit-note" element={<EditNoteForm />} />
                </Routes>
            </div>
        </NotesContext.Provider>
    );
}

export default App;
