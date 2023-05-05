import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 1.2rem;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0px;
    margin: 0px;
`;

const Icon = styled(FaShoppingCart)`
    color: white;
    transition: color 0.5s ease;
`;

const CartIcon = () => {
    const cartProducts = useSelector(
        state => state.cart.cartProducts
    )
    return (
    <Container>
        <Icon/>
        <span
        style={{
            background: '#bbb128',
            borderRadius: '50%',
            padding: '1.3px',
            color: 'white',
            margin: '0',
        }}
        >
        {cartProducts.length}
        </span>
    </Container>
    );
};

export default CartIcon;