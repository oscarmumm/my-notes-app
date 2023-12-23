import "../styles/WarningModal.css";

const WarningModal = ({remove, hideWarningModal}) => {

    const cancelAction = () => {
        hideWarningModal()
    }

    const removeNote = () => {
        remove()
    }

    return (
        <div className="modal_screen">
            <div className="modal_div">
                <h2 className="modal_title">¿Está seguro de borrar la nota?</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_delete" onClick={removeNote}>
                        Si, eliminar
                    </button>
                    <button className="modal_btn btn_cancel" onClick={cancelAction}>
                        No, regresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningModal;
