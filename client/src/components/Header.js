import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Header = () => {

    const {uid} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <Container>
            <Side>
                <Item>
                    <Link to='/'>
                        <Title>
                            MediaTics
                        </Title>
                    </Link>
                </Item>
                {/* FIXME Improve javascript */}
                {
                    (uid) &&
                        <Link to='/dashboard'>
                            <Item>
                                <span>Dashboard</span>
                            </Item>
                        </Link>
                }
                {
                    (uid) &&
                        <Link to='/product'>
                            <Item>
                                <span>Productos</span>
                            </Item>
                        </Link>
                }
                {
                    (uid) &&
                        <Link to='/sale'>
                            <Item>
                                <span>Ventas</span>
                            </Item>
                        </Link>
                }
            </Side>
            <Side>
                {
                    uid ?
                        <LogoutButton onClick={handleLogout}>Salir</LogoutButton>  // TODO
                    :
                        <Link to='/login'>
                            <LoginButton>Ingresar</LoginButton>
                        </Link>
                }
            </Side>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #40444c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 10px 30px;

    a {
        text-decoration: none;
    }
`

const Side = styled.div`
    display: flex;
    align-items: center
`

const Item = styled.div`
    font-size: 16px;
    color: white;
    margin-right: 1.5rem;
`

const Title = styled.div`
    font-weight: 600;
    color: white;
`

const LoginButton = styled.div`
    background-color: #1bcdd4;
    border-radius: 3px;
    margin-left: 10px;
    padding: 5px 15px;
    cursor: pointer;
    font-weight: 500;
    color: white;
`

const LogoutButton = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    border: 2px solid #FF2640;
    border-radius: 3px;
    margin-left: 10px;
    padding: 5px 1.5rem;
    cursor: pointer;
    font-weight: 500;
    color: white;

    :hover {
        background-color: #FF2640;
    }
`