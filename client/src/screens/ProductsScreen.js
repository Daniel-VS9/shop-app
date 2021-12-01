import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import CardGroup from '../components/CardGroup';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsSidebar from '../components/ProductsSidebar';
import { useFetch } from '../hooks/useFetch';

const DashboardScreen = () => {

    let {suppliername} = useParams();
    if(!suppliername) suppliername = 'all';

    const { loading, data } = useFetch(`/product/${suppliername}`);

    return (
        <>
            <Header />
            <Container>
                <ProductsSidebar url={`/supplier/${suppliername}`} />
                <div>
                        {
                            loading ?
                                <h1> Espere... </h1>
                            :
                                (
                                    (data?.data.error) ?  
                                        <h2>Sin productos</h2>
                                    :
                                        <CardGroup products={data.data} />
                                )
                        }
                    
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default DashboardScreen;

const Container = styled.div`
    background-color: #f4f4f4;
    padding-top: 1rem;
    // padding-bottom: 2rem;
    padding: 1rem 3rem 2rem 3rem;

    display: grid;
    grid-template-columns: 20% 80%;
    gap: 2rem;
`;
