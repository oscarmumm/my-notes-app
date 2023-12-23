import { Link } from "react-router-dom";
import "../styles/Modal.css";

const Modal = ({remove, cancel, noteToEdit}) => {

    const removeNote = () => {
        remove()
    }

    const cancelAction = () => {
        cancel()
    }

    return (
        <div className="modal_screen">
            <div className="modal_div">
                <Link to="edit-note" state={{noteToEdit}} className="modal_btn btn_edit">
                    Editar
                </Link>
                <button className="modal_btn btn_delete" onClick={removeNote}>
                    Eliminar
                </button>
                <button className="modal_btn btn_cancel" onClick={cancelAction}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default Modal;
