import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import { userAccount, rechargeAccount, userResume } from '../../redux/thunks';
import '../../App.css';
import RechargeModal from '../modals/RechargeModal'
import Total from '../pure/Total';
import { numberWithDots } from '../../utils/numberWithDot'

const Balance = () => {

    const { user, token } = useContext(AuthContext)
    const account = useSelector((state) => state.dharma.account);
    const resume = useSelector((state) => state.dharma.transactionsResume);
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
        dispatch(userResume(user.id, token))
    }, [dispatch])

    useEffect(() => {
        if (account && account.amount !== undefined) {
            setMonto(account.amount);
        }
    }, [account]);

    const data = resume.trans

    return (
        <div className='App2'>
            <div className='container'>
                {openModal && 
                    <RechargeModal 
                        setOpenModal={setOpenModal} 
                        setRecharge={setRecharge}
                        handleRecharge={handleRecharge}
                    />
                }
                <div className='row'>
                    <div className='d-grid d-md-flex justify-content-md-end'>
                        <div className='d-grid col-2 mb-4 text-end '>
                            <button 
                                className="btn btn-outline-danger btn-lg boton shadow shadow-sm"
                                onClick={handleOpenModal}
                            >
                                Agregar saldo
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <Total text={'Entradas'} total={numberWithDots(resume.totalIncomes)}/>
                    </div>
                    <div className='col-4'>
                        <Total text={'Salidas'} total={numberWithDots(resume.totalOutgoings)}/>
                    </div>
                    <div className='col-4'>
                        <Total text={'Total'} total={numberWithDots(monto)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='card cardTable shadow mx-auto pt-5 mb-5'>
                        <table className="table tabla table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">Mensaje</th>
                                    <th className="text-center" scope="col">Monto</th>
                                    <th className="text-center" scope="col">Carta</th>
                                    <th className="text-center" scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {data && data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-center">{item.message}</td>
                                        {item.inOut === 'in' 
                                            ? <td className="text-center text-success fw-bold">{numberWithDots(item.amount)}</td> 
                                            : <td className="text-center text-danger fw-bold">{numberWithDots(item.amount)}</td>}
                                        <td className="text-center">{item.card}</td>
                                        <td className="text-center">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;
