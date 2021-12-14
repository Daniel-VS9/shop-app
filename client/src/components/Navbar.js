import { Close, Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { startLogout } from '../actions/auth'

const Navbar = () => {

    const {uid} = useSelector(state => state.auth)
    const [menuVisibility, setMenuVisibility] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleMenuButton = () => {
        setMenuVisibility(menuVisibility => !menuVisibility)
    }

    return (
        <Container>

            <ToggleButton onClick={handleMenuButton} className='toggleButton' aria-expanded='false' >
                <span className='sr-only'>
                    {
                        menuVisibility ?
                            <Close fontSize='large'/>
                        :
                            <Menu fontSize='large' />
                    }
                </span>
            </ToggleButton>

            <Side>
                <Nav>
                    <Ul data-visible={menuVisibility} className='primary-navigation'>
                        <Li>
                            <Link to='/'>
                                <span className='title'>
                                    Mediatics
                                </span>
                            </Link>
                        </Li>

                        {
                            (uid) && 
                            <Li>
                                <Link to="/dashboard">
                                    <span>
                                        Dashboard
                                    </span>
                                </Link>
                            </Li>
                            
                        }
                        {
                            (uid) && 
                            <Li>
                                <Link to="/product">
                                    <span>
                                        Productos
                                    </span>
                                </Link>
                            </Li>
                            
                        }
                        {
                            (uid) && 
                            <Li>
                                <Link to="/sale">
                                    <span>
                                        Ventas
                                    </span>
                                </Link>
                            </Li>
                        }
                        {
                            (uid && menuVisibility) &&
                            <LogoutButton onClick={handleLogout}>Salir</LogoutButton>
                        }
                        {
                            (!uid && menuVisibility) &&
                            <Link to='/login'>
                                <LoginButton>Ingresar</LoginButton>
                            </Link>
                        }

                    </Ul>
                </Nav>
            </Side>

            <Side className='rightSide'>
                {
                    (uid) ?
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

export default Navbar

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding 0 30px;

    overflow-x: hidden;
    background-color: #40444c;

    @media(max-width: 35em) {
        .primary-navigation {
            position: fixed;
            inset: 0 0 0 30%;
            z-index: 900;

            flex-direction: column;
            padding: min(30vh, 10rem) 2em;

            background: hsl(220 9% 27% / 0.4);
            backdrop-filter: blur(2rem);
            transform: translateX(100%);
            transition: 350ms ease-out;
        }

        .toggleButton {
            display: block;
        }

        .rightSide {
            display: none;
        }
    }

    .primary-navigation[data-visible="true"] {
        transform: translateX(0%);
    }
`

const Side = styled.div`
    display: flex;
    align-items: center
`

const Nav = styled.nav`
    display: flex;
    color: white;
`

const Ul = styled.ul`
    display: flex;
    gap: 1rem;

    list-style: none;
    padding: 0;
    margin: 0;
`

const Li = styled.li`
    padding: 1rem 0.5rem;
    font-size: 16px;
    
    a {
        text-decoration: none;
        color: white;
    }

    .title {
        font-weight: 600;
    }
`

const ToggleButton = styled.button`
    display: none;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 999;
    border: 0;
    color: white;
    background-color: hsl(220 9% 27% / 0.6);
    border-radius: 4px;
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
    display: flex;
    justify-content: center;

    :hover {
        background-color: #FF2640;
    }
`