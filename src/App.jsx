import Home from "./views/Home";
import NewNote from "./views/NewNote";
import { NotesContext } from "./contexts/NotesContext";
import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

const notesExample = [
    { id: 1, title: "titulo de nota", body: "texto de la nota" },
    { id: 2, title: "titulo de nota", body: "texto de la nota" },
    { id: 3, title: "titulo de nota", body: "texto de la nota" },
    { id: 4, title: "titulo de nota", body: "texto de la nota" },
];

function App() {
    const [notes, setNotes] = useState(notesExample);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <div className="app_container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="new-note" element={<NewNote />} />
                    
                </Routes>
            </div>
        </NotesContext.Provider>
    );
}

export default App;
