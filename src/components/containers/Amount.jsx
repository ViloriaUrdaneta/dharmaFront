import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { giveAwayCharge } from '../../redux/thunks';
import '../../App.css';
import { Link } from 'react-router-dom';

const Amount = () => {

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const handleAmount = () => {
        dispatch(giveAwayCharge(amount))
    }

    return (
        <div className='App'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <input 
                            type="text" 
                            className="form-control col-md-6 mt-3 input" 
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <hr className='line' />
                        <p className='subtitle'>Elige un monto</p>
                    </div>
                    <div className='col-6'>
                        <Link to="/cards" className='boton'>
                            <div className='d-grid d-md-flex justify-content-md-end'>
                                <div className='d-grid col-4 mt-4 text-end '>
                                    <button 
                                        className="btn btn-outline-danger btn-lg boton shadow shadow-sm"
                                        onClick={handleAmount}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amount;
