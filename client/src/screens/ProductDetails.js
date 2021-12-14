import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useFetch } from '../hooks/useFetch'


const ProductDetails = () => {

    const {productId} = useParams()
    const {loading, data} = useFetch(`/product/${productId}`)

    return (
        <>
            <Navbar />

            {
                loading ?
                <h1>Cargando...</h1>
                :
                <Container>
                    <Left className='left'>
                        <ImageContainer>
                            <Image src={data.data.imagePath} />
                        </ImageContainer>
                    </Left>
                    <Right>
                        <h1>{data.data.name}</h1>
                        <span>Proveedor: {data.data.supplierCode}</span>
                        <span>Precio: $ {data.data.price}</span>
                        <span>Stock: {data.data.stock}</span>
                        <span>{data.data.description}</span>
                    </Right>
                </Container>
            }
            
            <Footer />
        </>
    )
}

export default ProductDetails

const Container = styled.div`
    background-color: #fafafa;
    padding: 3rem;
    display: flex;
    gap: 3rem;
    justify-content: space-evenly;
    min-height: 60vh;

    @media (max-width: 1020px) {
        .left {
            width: 40%;
        }
    }

    @media (max-width: 770px) {
        flex-direction: column;
        padding: 3rem 1rem 3rem 1rem;

        h1 {
            font-size: 25px;
        }

        .left {
            width: 100%
        }
    }
`

const Left = styled.div`
    width: 30rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.div`
    max-width: 500px;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 4px;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 900px;

    span {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    h1 {
        margin-bottom: 1rem;
    }
`