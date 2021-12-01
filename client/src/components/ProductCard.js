import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const ProductCard = ({ id, title, supplier, price, stock, imagePath }) => {
    return (
        <Card>
            <ImageContainer>
                <CardImage src={imagePath} />
            </ImageContainer>
            <CardDescription>
                <Link to={`/product/${id}`}>
                    <h3>{title.length > 50 ? `${title.substring(0, 50)}...` : title}</h3>
                </Link>
                <span>{supplier}</span>
                <span className="price">$ {price}</span>
                <span>{stock} restantes</span>
            </CardDescription>
        </Card>
    );
};

export default ProductCard;

const Card = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: white;
    height: 200px;
    width: 360px;
    // margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 5px;
    padding: 0.5rem;
`;

const ImageContainer = styled.div`
    height: 100%;
    // background-color: blue;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardImage = styled.img`
    height: auto;
    width: 100%;
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h3 {
        margin-bottom: 0.4rem;
        color: black;
    }

    span {
        padding-top: 0.5rem;
    }

    .price {
        font-weight: 600;
    }
`;
