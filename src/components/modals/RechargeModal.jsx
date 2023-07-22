import React from 'react';
import '../../App.css';

const RechargeModal = ({ setOpenModal, setRecharge, handleRecharge }) => {

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar saldo</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setOpenModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>Introduce el monto que deseas agregar</p>
                        <input 
                            type="text" 
                            className="form-control col-md-6 mt-3 input" 
                            onChange={(e) => setRecharge(e.target.value)}
                        />
                        <hr className='line' />
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
                            onClick={ handleRecharge } 
                            className="btn btn-primary"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RechargeModal;
