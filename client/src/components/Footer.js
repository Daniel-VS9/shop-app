import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {Facebook, Instagram, Mail} from '@material-ui/icons'

const Footer = () => {
    return (
        <>
        <Container>
            <Column>
                <Link to='/'>
                    <SectionTitle>Mediatics Integrales</SectionTitle>
                </Link>
            </Column>
            <Column>
                <SectionTitle>Contacto</SectionTitle>
                <Contact>
                    <Facebook/>
                    <span>Mediatics.sas</span>
                </Contact>
                <Contact>
                     <Instagram/>
                    <span>@Mediatics.sas</span>
                </Contact>
                <Contact>
                    <Mail/>
                    <span>ventasmediatics@gmail.com</span>
                </Contact>
            </Column>
            <Column>
                <SectionTitle>Area de usuarios</SectionTitle>
                <Link to='/login'>
                    <Contact>Ingresar</Contact>
                </Link>
                <Link to='/signup'>
                    <Contact>Registrarse</Contact>
                </Link>
            </Column>
        </Container>
        <Autor>
            Created by Daniel Vergara
        </Autor>
        </>
    )
}

export default Footer

const Container = styled.div`
    background-color: #40444c;
    padding: 40px 5%;
    color: white;
    display: flex;
    justify-content: space-between;
    
    a {
        color: white
    }

    @media(max-width: 800px) {
        flex-wrap: wrap;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 800px) {
        margin-bottom: 1.5rem;
    }
`

const SectionTitle = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
`

const Contact = styled.span`
    display: flex;
    align-items: center;
    padding: 3px 0px;
    cursor: pointer;

    span {
        margin-left: 10px;
    }

    svg:hover {
        color: #1bcdd4;
    }
`

const Autor = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0px;
    background-color: #696c6c;
    color: white;
    font-size: 0.8rem;
`