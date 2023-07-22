import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';
import '../../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { dispatch, user } = useContext(AuthContext);

    const handlelogout = () => {
        dispatch({ type: 'LOGOUT' });
        sessionStorage.removeItem('userToken');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid mt-1">
                    <p className='user-symbol'>{user.card}</p>
                <div className="collapse navbar-collapse d-grid d-md-flex justify-content-md-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 mt-3">
                    <Link to="/" className="nav-item" >
                        <li >
                            <p>HOME</p>
                        </li>
                    </Link>
                    <Link to="/balance" className="nav-item" >
                        <li>
                            <p>SALDO</p>
                        </li>
                    </Link>
                    <li className="nav-item">
                        <p>MENSAJES</p>
                    </li>
                </ul>
                    <form className="d-flex">
                        <button 
                            onClick={handlelogout}
                            className="btn btn-outline-danger btn-lg boton-nav shadow shadow-sm"
                        >
                            Log out
                        </button>
                    </form>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;
