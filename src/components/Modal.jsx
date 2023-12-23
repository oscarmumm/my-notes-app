import { Link } from "react-router-dom";
import "../styles/Modal.css";
import { useState } from "react";
import WarningModal from "./WarningModal";

const Modal = ({ remove, cancel, noteToEdit }) => {
    const [showWarningModal, setShowWarningModal] = useState(false);

    const hideWarningModal = () => {
        setShowWarningModal(false);
    }

    const removeNote = () => {
        setShowWarningModal(true);
    };

    const cancelAction = () => {
        cancel();
    };

    return (
        <div className="modal_screen">
            <div className="modal_div">
                <h2 className="modal_title">{noteToEdit.title}</h2>
                <div className="modal_btn_div">
                    <Link
                        to="edit-note"
                        state={{ noteToEdit }}
                        className="modal_btn btn_edit"
                    >
                        Editar
                    </Link>
                    <button
                        className="modal_btn btn_delete"
                        onClick={removeNote}
                    >
                        Eliminar
                    </button>
                    <button
                        className="modal_btn btn_cancel"
                        onClick={cancelAction}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
            {showWarningModal ? (
                <WarningModal
                    remove={remove}
                    hideWarningModal={hideWarningModal}
                />
            ) : null}
        </div>
    );
};

export default Modal;
