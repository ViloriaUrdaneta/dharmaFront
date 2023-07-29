import React from 'react';
import '../../App.css';

const ErrorModal = ({setOpenModal}) => {

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Monto agregado no válido</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setOpenModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>El monto que agregaste excede tu saldo actual</p>
                        <hr className='line' />
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => setOpenModal(false)} 
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;
