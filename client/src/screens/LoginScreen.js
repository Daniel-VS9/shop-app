import React, { useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { startLoginEP } from '../actions/auth'
import { registerError, removeError } from '../actions/errors'
import Footer from '../components/Footer'
import { errorReducer } from '../reducers/errorReducer'

const LoginScreen = () => {

    const dispatch = useDispatch()
    const [errors, errorDispatch] = useReducer(errorReducer, [])

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        errorDispatch( removeError() )

        if(!isFormValid()) dispatch( startLoginEP(email, pass) );
    }

    const isFormValid = () => {
        let someError = false;

        if(email.trim().length < 3) {
            errorDispatch(registerError('Email invalido'))
            someError = true;
        }
        if(pass.length === 0) {
            errorDispatch(registerError('Clave invalida'))
            someError = true;
        }
        
        return someError;
    }

    return (
        <>
            <Container>
                <Box>
                    <Form onSubmit={handleSubmit}>
                        <Title>MediaTics</Title>
                        { errors.length > 0 && errors.map(error => (
                            <Error key={error}>{error}</Error>
                        )) }
                        <Input value={email} onChange={handleEmail} type='email' placeholder='example@mail.com' />
                        <Input value={pass} onChange={handlePass} type='password' placeholder='*******' />
                        <Button>Ingresar</Button>
                    </Form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default LoginScreen

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #fafafa;
`

const Box = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 40px;
`

const Title = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #948c94;
    font-size: 32px;
    font-weight: 700;
`

const Error = styled.div`
    background: #ffa9a9;
    border-radius: 3px;
    text-align: center;
    padding: 0.3rem 0;
    margin-bottom: 1rem;
    color: white;
`

const Input = styled.input`
    margin-bottom: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    border: none;
    border-bottom: 1px solid #948c94;
    font-size: 18px;
    color: #40444c;
    outline: none;
`

const Button = styled.button`
    border-radius: 3px;
    border: none;
    background-color: #1bcdd4;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
`