import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import ProductsScreen from '../screens/ProductsScreen'

const NoAuthenticateRoute = () => {

    const { uid } = useSelector(state => state.auth)

    if(uid) {
        return <ProductsScreen />
    }

    return <Outlet />
}

export default NoAuthenticateRoute
