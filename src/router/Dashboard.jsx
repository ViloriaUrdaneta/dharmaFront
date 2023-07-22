import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import Layout from './Layout';
import Home from '../components/containers/Home';
import Login from '../components/containers/Login';

const Dashboard = () => {

    const { token } = useContext(AuthContext)

    return (
        <div>
            { token ? 
                <>
                    <Layout/>
                    <Home/>
                </>
                :
                <Login/> 
            }
        </div>
    );
}

export default Dashboard;
