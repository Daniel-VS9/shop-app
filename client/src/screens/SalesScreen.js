import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useFetch } from '../hooks/useFetch';

const SalesScreen = () => {

    const {loading, data} = useFetch('sale/all')

    return (
        <Container>
            <Header />
            SalesScreen.js

            {
                loading ?
                <h1>Cargando</h1>
                :
                data.data
            }
            <Footer />
        </Container>
    );
};

export default SalesScreen;

const Container = styled.div`
    background: #fafafa;
`;
