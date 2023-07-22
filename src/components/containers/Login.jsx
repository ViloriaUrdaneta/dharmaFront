import React, { useState, useContext } from 'react';
import { login } from '../../utils/axiosService';
import LoginCard from '../pure/LoginCard';
import { decodeToken } from 'react-jwt';
import { AuthContext } from '../../context/authContext';


const Login = () => {

    const [registerForm, setRegisterForm] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AuthContext);


    const handleLogin = () => {
        login(email, password)
            .then((response) => {
                if(response.status === 200){
                    const token = response.data.token
                    sessionStorage.setItem('userToken', response.data.token);
                    const decodedToken = decodeToken(token);
                    dispatch({ type: 'DATAUSER', payload: decodedToken });
                    dispatch({ type: 'LOGIN', payload: token });
                    window.location.reload(); 
                }})
            .catch((error) => {
                alert('error: ', error)
            })
        setEmail('')
        setPassword('')
    }

    const handleRegister = () => {
        if(!registerForm){
            setRegisterForm(true)
        }else {
            setRegisterForm(false)
        }
    }

    return (
        <div className='no-log'>
            <div className='container-flui'>
                <div className='row'>
                    <div className='col-7 login-section1'>
                        <div className='card log-card shadow'>
                            <h3 className='title mt-5 mb-5'>DHARMA</h3>
                                {!registerForm && (
                                    <div className='d-grid col-6 mt-5 text-end '>
                                        <input 
                                            type="text" 
                                            className="form-control col-md-4 mt-5 input" 
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <hr className='line' />
                                        <input 
                                            type="password" 
                                            className="form-control col-md-4 mt-2 input" 
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <hr className='line' />
                                        <button className='btn btn-outline-danger boton2 shadow mt-4' onClick={handleLogin}>Log in</button>
                                        <button className='btn btn-outline-danger boton2 shadow mt-3' onClick={handleRegister}>Registrarse</button>
                                    </div>
                                )}
                                {registerForm && (
                                    <div className='d-grid col-6 mt-5 text-end '>
                                        <input 
                                            type="text" 
                                            className="form-control col-md-4 mt-5 input" 
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <hr className='line' />
                                        <input 
                                            type="password" 
                                            className="form-control col-md-4 mt-2 input" 
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <hr className='line' />
                                        <input 
                                            type="password" 
                                            className="form-control col-md-4 mt-2 input" 
                                            placeholder='Confirmar password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <hr className='line' />
                                        <button className='btn btn-outline-danger btn-lg boton2 shadow shadow-sm mt-3' onClick={handleRegister}>Registrarse</button>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className='col-5 login-section2'>
                        <LoginCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
