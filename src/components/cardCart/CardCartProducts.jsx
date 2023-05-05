import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions'
import {
    ContainerCard,
    ContainerDetails,
    Title,
    Price,
    ImgProduct,
    ContainerAmount,
    Amount,
    ButtonCart
} from './cardCartStyles'

const CardCartProducts = ({img, title, price, quantity, id}) => {

    const dispatch = useDispatch();

    return (
        <ContainerCard>
            <ContainerDetails>
                <Title>{title}</Title>
                <Price>Price: $ {price}</Price>
            </ContainerDetails>
            <ImgProduct src={img} alt={title}/>
            <ContainerAmount>
                <ButtonCart onClick={() => dispatch(cartActions.addToCart({img, title, price, quantity, id}))}>
                    <BsPlusLg />
                </ButtonCart>
                <Amount> {quantity} </Amount>
                <ButtonCart onClick={() => dispatch(cartActions.removeFromCart({img, title, price, quantity, id}))}>
                    <FaMinus />
                </ButtonCart>
            </ContainerAmount>
        </ContainerCard>
    )
}

export default CardCartProducts