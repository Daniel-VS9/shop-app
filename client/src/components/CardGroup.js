import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const CardGroup = ({products}) => {

    return (
        <CardsContainer>
            {products.map((p) => (
                <ProductCard
                    key={p._id}
                    title={p.name}
                    supplier={p.supplierCode}
                    price={p.price}
                    stock={p.stock}
                    imagePath={p.imagePath}
                    id={p._id}
                />
            ))}
        </CardsContainer>
    );
};

export default CardGroup;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`;
