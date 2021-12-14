import React, { useReducer } from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useForm } from '../hooks/useForm'
import { errorReducer } from '../reducers/errorReducer'
import { registerError, removeError } from '../actions/errors'
import Navbar from '../components/Navbar'

const AddProductScreen = () => {
    
    const [formValues, hanldeInputChange] = useForm({
        name: '',
        price: '',
        code: '',
        stock: '0',
        supplier: '',
        image: '',
        description: ''
    })

    const {name, price, code, stock, supplier, image, description} = formValues;

    const hanleSubmit = (e) => {
        e.preventDefault();

        !checkErrors(name, price, code, stock, supplier) && console.log(formValues)
    }


    const [errors, dispatch] = useReducer(errorReducer, [])

    const checkErrors = (name, price, code, stock, supplier) => {
        dispatch(removeError())
        let error = false;

        if(name === '') {
            dispatch(registerError('Nombre invalido'));
            error = true;
        }
        if(!(/[0-9]/.test(price))) {
            dispatch(registerError('Precio invalido'))
            error = true;
        }
        if(code === '') {
            dispatch(registerError('Codigo invalido'))
            error = true;
        }
        if(stock < 0) {
            dispatch(registerError('Stock invalido'))
            error = true;
        }
        if(supplier === '') {
            dispatch(registerError('Proveedor invalido'))
            error = true;
        }

        return error;
    }

    
    return (
        <>
            <Navbar />
            <Container>
                <Box className='Container__box'>

                    <h3>Anadir Producto</h3>

                    <div>
                        { errors.length > 0 && errors.map(error => (
                            <Error key={error}>{error}</Error>
                        )) }

                        <Form onSubmit={hanleSubmit}>
                            <Label>Nombre</Label>
                            <Input name='name' value={name} onChange={hanldeInputChange} />
                            <Label>Precio</Label>
                            <Input name='price' type='number' value={price} onChange={hanldeInputChange} />
                            <Label>Codigo</Label>
                            <Input name='code' value={code} onChange={hanldeInputChange} />
                            <Label>Stock</Label>
                            <Input name='stock' type='number' value={stock} onChange={hanldeInputChange} />
                            <Label>Proveedor</Label>
                            <Input name='supplier' value={supplier} onChange={hanldeInputChange} />
                            <Label>Imagen</Label>
                            <Input name='image' type='file' value={image} onChange={hanldeInputChange} className='Form__file'/>
                            <Label>Descripcion</Label>
                            <textarea name='description' value={description} onChange={hanldeInputChange} className='Form__textarea' ></textarea>
                            <SendButton>Guardar producto</SendButton>
                        </Form>
                    </div>
                </Box>
            </Container>
            <Footer />   
        </>
    )
}

export default AddProductScreen

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    min-height: 70vh;
    padding: 1rem;

    @media (max-width: 1400px) {
        .Container__box {
            width: 35%;
        }
    }

    @media (max-width: 1200px) {
        .Container__box {
            width: 50%;
        }
    }

    @media (max-width: 768px) {
        .Container__box {
            width: 90%;
        }
    }
`

const Box = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    width: 30%;
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    color: #40444c;
    
    h3 {
        text-align: center;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .Form__file {
        border: none;
        margin-top: 0.3rem;
    }

    .Form__textarea {
        margin-top: 0.3rem;
    }
`

const Input = styled.input`
    margin-bottom: 1.2rem;

    border: none;
    border-bottom: 1px solid #40444c;
    outline: none;
    font-size: 1rem;
    color: #40444c;
`

const Label = styled.span`

`

const SendButton = styled.button`
    margin-top: 2rem;
    padding: 0.5rem 0rem;
    background-color: #00d1b2;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 1.1rem;
`

const Error = styled.div`
    background: #ffa9a9;
    border-radius: 3px;
    text-align: center;
    padding: 0.3rem 0;
    margin-bottom: 0.3rem;
    color: white;
`