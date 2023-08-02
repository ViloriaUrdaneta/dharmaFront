import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import { giveAwayCharge, userAccount } from '../../redux/thunks';
import '../../App.css';
import { numberWithDots } from '../../utils/numberWithDot';
import ErrorModal from '../modals/ErrorModal';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Amount = () => {

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const { user, token } = useContext(AuthContext)
    const account = useSelector((state) => state.dharma.account);
    const [monto, setMonto] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userAccount(user.id, token))
    }, [dispatch])

    useEffect(() => {
        if (account && account.amount !== undefined) {
            setMonto(account.amount);
        }
    }, [account]);


    const handleAmount = () => {
        if(amount <= monto && amount !== 0){
            console.log(amount)
            dispatch(giveAwayCharge(amount));
            navigate('/cards');
        }else if (amount === 0){
            Swal.fire({
                icon: 'error',
                title: 'Monto agregado no válido',
                text: 'Debes agregar un valor',
            });
        }else if (amount > monto){
            Swal.fire({
                icon: 'error',
                title: 'Monto agregado no válido',
                text: 'El monto que agregaste excede tu saldo actual',
            });
        }
    }

    return (
        <div className='App'>
            <div className='container'>
                {openModal && 
                    <ErrorModal 
                        setOpenModal={setOpenModal} 
                    />
                }
                <div className='row mb-5'>
                    <p className='subtitle'>Tu saldo actual es: <span className='balance'>{numberWithDots(monto)}</span> </p>
                </div>
                {monto > 0 ? (
                    <>
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
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className='subtitle'>Su saldo es cero, para continuar por favor ponga saldo</h1>
                )}
            </div>
        </div>
    );
}

export default Amount;


