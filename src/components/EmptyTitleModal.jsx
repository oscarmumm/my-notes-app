import "../styles/Modal.css";

const EmptyTitleModal = ({ closeModal }) => {
    const goBack = () => {
        closeModal();
    };
    return (
        <div className="modal_screen">
            <div className="modal_div">
                <h2 className="modal_title">Debe agregar un título</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_cyan" onClick={goBack}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmptyTitleModal;
