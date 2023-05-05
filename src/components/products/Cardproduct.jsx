import React from 'react'
import {
    InfoContainer,
    AddToCartButton,
    CardPrice,
    CardTitle,
    CardImage,
    CardWrapper
} from './ProductsStyles';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions'

function ProductCard({ img, title, price, id }) {

    const dispatch = useDispatch()

    return (
        <CardWrapper>
            <CardImage src={img} alt={`Imagen de ${title}`} />
            <InfoContainer>
                <CardTitle>{title}</CardTitle>
                <CardPrice>Precio: ${price}</CardPrice>
                <AddToCartButton onClick={() => dispatch(cartActions.addToCart({ img, title, price, id }))}>Añadir</AddToCartButton>
            </InfoContainer>
        </CardWrapper>
    );
}

export default ProductCard;