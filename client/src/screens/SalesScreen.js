import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useFetch } from '../hooks/useFetch';

const SalesScreen = () => {

    // const {loading, data} = useFetch('sale/all')

    return (
        <>
            <Navbar />
            <Container>
                
                <Side>
                    <SearchBarContainer>
                        <Input placeholder='Buscar' />
                        <Search />
                    </SearchBarContainer>
                    <ProductsContainer>
                        products <br />
                        products <br />
                        products
                        products
                        products
                    </ProductsContainer>
                </Side>

                {/* {
                    loading ?
                    <h1>Cargando</h1>
                    :
                    data.data
                } */}
            </Container>
            <Footer />
        </>
    );
};

export default SalesScreen;

const Container = styled.div`
    background: #fafafa;
    min-height: 60vh;
    display: flex;
    padding: 3rem 2rem;
    color: #40444c;
`;

const Side = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const SearchBarContainer = styled.div`
    display: flex;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 8px;
    padding: 10px 1rem;

    input:focus {
        outline: none;
    }
`

const Input = styled.input`
    border: none;
    width: 100%;
    font-size: 18px;
`

const ProductsContainer = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 7px;
    padding: 0 1rem;

    min-height: 300px;
    max-height: 500px;
`