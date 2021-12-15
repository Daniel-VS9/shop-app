import React from 'react'
import styled from'styled-components'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'


const ProductsSidebar = () => {

    const {loading, data} = useFetch('/supplier/all')

    return (
        <Container>
            <List>
                {
                    (!loading && data.data) &&
                    data.data.map(item => (
                        <div key={item._id} >
                            <Link to={`/product/supplier/${item.name}`} >
                                <ListItem button key={item.name}>
                                    <ListItemText>
                                        {item.name}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            {
                                !!item.items &&
                                <List>
                                    {
                                        item.items.map(subItem => (
                                                <ListItem button>
                                                    <ListItemText>
                                                        {subItem.name}
                                                    </ListItemText>
                                                </ListItem>
                                        ))
                                    }
                                </List>
                            }
                        </div>
                    ))
                }
            </List>
        </Container>
    )
}

export default ProductsSidebar

const Container = styled.div`
    background-color: white;
    // min-height: 70vh;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 8px;

    a {
        color: #40444c;
        decorated: none;
    }
`