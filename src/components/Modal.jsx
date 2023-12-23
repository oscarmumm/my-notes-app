import "../styles/Modal.css";

const Modal = ({edit, remove, cancel}) => {

    const editNote = () => {
        edit()
    }

    const removeNote = () => {
        remove()
    }

    const cancelAction = () => {
        cancel()
    }

    return (
        <div className="modal_screen">
            <div className="modal_div">
                <button className="modal_btn btn_edit" onClick={editNote}>
                    Editar
                </button>
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
