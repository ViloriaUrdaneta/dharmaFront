import React, { useContext } from 'react';
import { Route, Routes  } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthContext } from '../context/authContext';
import Amount from '../components/containers/Amount';
import Cards from '../components/containers/Cards';
import Message from '../components/containers/Message';
import Receive from '../components/containers/Receive';
import Choose from '../components/containers/Choose';
import ProtectedRoutes from './ProtectedRoute';
import Dashboard from './Dashboard';
import '../App.css'
import Balance from '../components/containers/Balance';



const RoutesApp = () => {

    const { token } = useContext(AuthContext)

    return (
        <div>
            <Suspense>
                <Routes>
                    <Route index element={<Dashboard/>} />
                    <Route
                        path="/amount"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Amount />
                        </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/cards"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Cards/>
                        </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/confirm"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Message/>
                        </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/choose"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Choose/>
                        </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/balance"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Balance/>
                        </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/receive"
                        element={
                        <ProtectedRoutes isAutenticated={token}>
                            <Receive/>
                        </ProtectedRoutes>
                        }
                    />
                </Routes>
            </Suspense>
        </div>
    )
}

export default RoutesApp;
