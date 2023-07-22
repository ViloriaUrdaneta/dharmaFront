import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Rules from '../pure/Rules';


const Home = () => {
    return (
        <div className='App'>
            <div className='container home'>
                <div className='row header'>
                    <div className='col-6'>
                        <h1 className='title'>DHARMA</h1>
                        <p className='subtitle'>No eres lo que tienes, eres lo que das</p>
                    </div>
                    <div className='col-6'>
                        <Link to="/choose" className='boton'>
                            <div className='d-grid d-md-flex justify-content-md-end'>
                                <div className='d-grid col-4 mt-4 text-end '>
                                    <button className="btn btn-outline-danger btn-lg boton shadow shadow-sm">Jugar</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row mt-5'>
                    <Rules/>
                </div>
            </div>
        </div>
    );
}

export default Home;
