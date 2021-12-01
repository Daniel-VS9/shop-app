import axios from 'axios'
import { types } from "../types/types"

export const startLoginEP = (email, pass) => {

    return async(dispatch) => {
        try {
            const {data} = await axios({
                method: 'post',
                url: '/user/login',
                data: {
                    email,
                    pass
                },
                headers: {'Content-Type' : 'application/json'}
            })

            dispatch( login(data._id, data.username) )
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', data.username)

        } catch (error) {
            console.log('Error ', error.response.data.error) // ANCHOR show the error on the login screen
        }

    }
}

export const startChecking = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method: 'get',
                url: '/user/checkToken',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
                }
            })
            // console.log(data)
            dispatch( login(data._id, data.username) )
        } catch (error) {
            console.log('error: ', error)
            dispatch( checkingFinish() ) 
        }
    }
}

export const checkingFinish = () => ({
    type: types.authChekingFinish
})

export const login = (uid, username) => ({
    type: types.login,
    payload: {
        uid,
        username
    }
})

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear()
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})