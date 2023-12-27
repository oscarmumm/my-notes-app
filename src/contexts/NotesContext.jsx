import { createContext } from "react";

const getLocalData = () => {
    let notes = localStorage.getItem('saved-notes');
    if (notes) {
        return JSON.parse(localStorage.getItem('saved-notes'))
    } else {
        return [];
    }
}

export const NotesContext = createContext(getLocalData());