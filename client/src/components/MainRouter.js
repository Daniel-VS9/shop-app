import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { startChecking } from '../actions/auth'
import DashboardScreen from '../screens/DashboardScreen'
import ProductScreen from '../screens/ProductsScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import NotFound from '../screens/NotFound'
import ProductDetails from '../screens/ProductDetails'
import SalesScreen from '../screens/SalesScreen'
import SignUpScreen from '../screens/SingUpScreen'
import NoAuthenticateRoute from './NoAuthenticateRoute'
import PrivateRoute from './PrivateRoute'

const MainRouter = () => {

    const dispatch = useDispatch()
    const {checking} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch])
    // ANCHOR

    if( checking ) {
        return <h2> Espere... </h2>
    }

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route element={<NoAuthenticateRoute />} >
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/signup' element={<SignUpScreen />} />
                </Route>
                <Route element={<PrivateRoute />} >
                    <Route path='/product' element={<ProductScreen />} />
                    <Route path='/product/:productId' element={<ProductDetails />} />
                    <Route path='/sale' element={<SalesScreen />} />
                    <Route path='/dashboard' element={<DashboardScreen />} />
                    <Route path='/product/supplier/:suppliername' element={<ProductScreen />} />
                </Route>
                {/* <Route path='*' element={<Navigate to='/' />} /> ANCHOR redirect to 404 page */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default MainRouter
