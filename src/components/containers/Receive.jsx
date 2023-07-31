import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';
import { useDispatch, useSelector } from 'react-redux';
import { userPendings, lastGiftReceived } from '../../redux/thunks';
import '../../App.css';


const Recieve = () => {

    const { user, token } = useContext(AuthContext);
    const pendings = useSelector((state) => state.dharma.pendings);
    const lastGift = useSelector((state) => state.dharma.lastReception)
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleGift = () => {
        dispatch(lastGiftReceived(pendings.transactions[0].id, message, token));
        window.location.reload(); 
    }

    useEffect(() => {
        dispatch(userPendings(user.id, token));
    }, [dispatch, handleGift]);

    return (
        <div className='App'>
            <div className='container'>
                {pendings.number > 0 ? (
                    <>
                        <h1 className='subtitle2'>¡Recibiste {pendings.number} regalo!</h1>
                        <input 
                            type="text" 
                            className="form-control col-md-4 mt-3 input centered-placeholder" 
                            placeholder='Agradécelo para recibirlo'
                            onChange={(e) => setMessage(e.target.value)}  
                        />
                        <hr className='line2 mx-auto' />
                        <div className='d-grid d-md-flex justify-content-md-end'>
                            <div className='d-grid col-2 mt-4 mx-auto'>
                                <button 
                                    class="btn btn-outline-danger btn-lg boton shadow shadow-sm"
                                    onClick={handleGift}
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className='subtitle2'>No hay nuevos regalos</h1>
                )}
            </div>
        </div>
    );
}

export default Recieve;


