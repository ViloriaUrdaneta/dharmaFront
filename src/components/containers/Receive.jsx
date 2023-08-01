import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';
import { useDispatch, useSelector } from 'react-redux';
import { userPendings, lastGiftReceived } from '../../redux/thunks';
import GiftCard from '../pure/GiftCard.jsx';
import Swal from 'sweetalert2'
import '../../App.css';


const Recieve = () => {

    const { user, token } = useContext(AuthContext);
    const pendings = useSelector((state) => state.dharma.pendings);
    const lastGift = useSelector((state) => state.dharma.lastReception)
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    console.log(pendings.transactions)

    const onGiftCardClick = (id) => {
        if(message !== ''){
            dispatch(lastGiftReceived(id, message, token));
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            setTimeout(() => {
                window.location.reload(); 
            }, "3000");
        }else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    useEffect(() => {
        dispatch(userPendings(user.id, token));
    }, [dispatch]);

    return (
        <div className='App'>
            <div className='container'>
                {pendings.number > 0 ? (
                    <>
                        <div className='mb-3'>
                        {pendings.number > 1 
                            ? <h1 className='subtitle2'>¡Recibiste {pendings.number} regalos!</h1>
                            : <h1 className='subtitle2'>¡Recibiste {pendings.number} regalo!</h1>
                        }
                        </div>
                        <div className='row mt-5'>
                            {pendings.transactions.map((pending) => (
                                <div className='col-3' key={pending.id}>
                                    <GiftCard 
                                        onGiftCardClick={onGiftCardClick}
                                        setMessage={setMessage}
                                        card={pending.sender_card}
                                        message={pending.sender_message}
                                        id={pending.id}
                                    >
                                    </GiftCard>
                                </div>
                            ))}
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


