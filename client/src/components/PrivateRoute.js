import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const authUser = useSelector((state) => state.auth)

    if(!authUser.uid) {
        return <Navigate to='/login' /> //TODO go to desire page after login
    }

    return <Outlet />
}

export default PrivateRoute
