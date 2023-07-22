import React from 'react';
import '../../App.css';

const ConfirmModal = ({ setOpenModal, handleConfirm, charge, card }) => {

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirma tu regalo</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setOpenModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>Vas a regalar <b>{charge}</b> al usuario con la carta {card}. Dale confirmar para continuar</p>
                        <p>Esta acción es definitiva</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => setOpenModal(false)} 
                        >
                            Cancelar
                        </button>
                        <button 
                            type="button"  
                            className="btn btn-primary"
                            onClick={ handleConfirm }
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
