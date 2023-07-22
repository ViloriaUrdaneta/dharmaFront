import React , { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import { giveAwayMessage, giveAwaySender, sendGiveAway } from '../../redux/thunks';
import ConfirmModal from '../modals/ConfirmModal'
import '../../App.css';
import { Link } from 'react-router-dom';


const Message = () => {

    const { user, token } = useContext(AuthContext)
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const giveAway = useSelector((state) => state.giveLink.giveAway);

    const handleMessage = () => {
        dispatch(giveAwayMessage(message));
        dispatch(giveAwaySender(user.id));
        setOpenModal(true);
    }

    const handleConfirm = () => {
        dispatch(sendGiveAway(giveAway, token));
        setOpenModal(false)
    }

    return (
        <div className='App'>
            <div className='container'>
                {openModal && 
                    <ConfirmModal 
                        handleConfirm={handleConfirm}
                        setOpenModal={setOpenModal} 
                        charge={giveAway.charge}
                        card={giveAway.receiverCard}
                    />
                }
                <div className='row'>
                    <div className='col-6'>
                        <input 
                            type="text" 
                            className="form-control col-md-6 mt-3 input" 
                            onChange={(e) => setMessage(e.target.value)}   
                        />
                        <hr className='line' />
                        <p className='subtitle'>Deja un mensaje y confirma el regalo</p>
                    </div>
                    <div className='col-6'>

                            <div className='d-grid d-md-flex justify-content-md-end'>
                                <div className='d-grid col-4 mt-4 text-end '>
                                    <button 
                                        className="btn btn-outline-danger btn-lg boton shadow shadow-sm"
                                        onClick={handleMessage}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;


/**
 *                         <Link to="/" className='boton'>
 * </Link>
 */