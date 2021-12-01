import { NotListedLocation } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Container>
            <Message>
                Pagina no encontrada
                <NotListedLocation />
            </Message>
        </Container>
    )
}

export default NotFound;


const Container = styled.div`
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Message = styled.div`
    font-size: 4rem;
    font-weight: 600;

    svg {
        font-size: 6rem;
    }
`