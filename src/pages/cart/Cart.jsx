import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import CardCartProducts from '../../components/cardCart/CardCartProducts';
import { useSelector } from 'react-redux';
import {
    ContainerCart,
    ContainerTitle,
    Title,
    Containerproducts,
    ContainerTotal,
    SubtotalContainer,
    CostShippingContainer,
    TotalInfo,
    SegmentText
} from './cartStyles'

const Cart = () => {

    const productsInCart = useSelector(
        state => state.cart.cartProducts
    )
    const shippingCost = useSelector(
        state => state.cart.shippingCost
    )

    let subtotal = productsInCart.reduce((acc,valor) => {
        return acc += (valor.price * valor.quantity)
    }, 0)

    return (
        <ContainerCart>
            <ContainerTitle>
                <Title>Carrito de compras <FaShoppingCart /> </Title>
            </ContainerTitle>
            <Containerproducts>
                {
                    productsInCart.map(item => <CardCartProducts key={item.id} {...item} />)
                }
            </Containerproducts>
            <ContainerTotal>
                <SubtotalContainer>
                    <SegmentText>Subtotal: </SegmentText>
                    <SegmentText>$ {subtotal}</SegmentText>
                </SubtotalContainer>
                <CostShippingContainer>
                    <SegmentText>Envio: </SegmentText>
                    <SegmentText>$ {shippingCost}</SegmentText>
                </CostShippingContainer>
                <TotalInfo>
                    <SegmentText>Total: </SegmentText>
                    <SegmentText>$ {subtotal + shippingCost}</SegmentText>
                </TotalInfo>
            </ContainerTotal>
        </ContainerCart>
    )
}

export default Cart