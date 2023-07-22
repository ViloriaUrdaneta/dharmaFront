import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Recieve = () => {
    return (
        <div className='App'>
            <div className='container'>
                <h1 className='subtitle2'>¡Recibiste un regalo!</h1>
                <input type="text" className="form-control col-md-4 mt-3 input centered-placeholder" placeholder='Agradécelo para recibirlo'/>
                <hr className='line2 mx-auto' />
                <Link to="/" className='boton'>
                    <div className='d-grid d-md-flex justify-content-md-end'>
                        <div className='d-grid col-2 mt-4 mx-auto'>
                            <button class="btn btn-outline-danger btn-lg boton shadow shadow-sm">Enviar</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Recieve;
