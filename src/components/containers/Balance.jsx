import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import { userAccount, rechargeAccount } from '../../redux/thunks';
import '../../App.css';
import RechargeModal from '../modals/RechargeModal'

const Balance = () => {

    const { user, token } = useContext(AuthContext)
    const account = useSelector((state) => state.giveLink.account);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [monto, setMonto] = useState(0);
    const [recharge, setRecharge] = useState(0);

    const handleOpenModal = () => {
        setOpenModal(true)
    };

    const handleRecharge = () => {
        dispatch(rechargeAccount(user.id, recharge, token))
        setOpenModal(false)
    };

    useEffect(() => {
        dispatch(userAccount(user.id, token))
    }, [dispatch])

    useEffect(() => {
        if (account && account.amount !== undefined) {
            setMonto(account.amount);
        }
    }, [account]);

    return (
        <div className='App'>
            <div className='container'>
                {openModal && 
                    <RechargeModal 
                        setOpenModal={setOpenModal} 
                        setRecharge={setRecharge}
                        handleRecharge={handleRecharge}
                    />
                }
                <div className='row'>
                    <div className='col-6'>
                        <p className='subtitle'>tu saldo actual es:</p>
                        <h3 className='balance'>{monto}</h3>
                        <hr className='line' />
                    </div>
                    <div className='col-6'>
                        <div className='d-grid d-md-flex justify-content-md-end'>
                            <div className='d-grid col-4 mt-4 text-end '>
                                <button 
                                    className="btn btn-outline-danger btn-lg boton shadow shadow-sm"
                                    onClick={handleOpenModal}
                                >
                                    Agregar saldo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;
