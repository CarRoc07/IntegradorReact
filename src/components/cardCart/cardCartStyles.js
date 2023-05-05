import styled from 'styled-components'

export const ContainerCard = styled.div`
    border: 3px solid white;
    width: 600px;
    margin: 0 auto;
    display: flex;
    border-radius: 22px;
    align-items: center;
    justify-content: space-around;
    font-family: 'Alkatra';
    padding: 10px;
    @media (max-width: 700px) {
        width: 400px;
    }
    @media (max-width: 500px) {
        width: 350px;
    }
    `;

export const ContainerDetails = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 35%;
    padding: 5px;
    `;

export const Title = styled.h3`
    font-size: 27px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 500px) {
        font-size: 20px;
    }
    `;

export const Price = styled.h4`
    font-size: 20px;
    margin: 0;
    @media (max-width: 500px) {
        font-size: 17px;
    }
    `;

export const ImgProduct = styled.img`
    max-width: 80px;
    height: auto;
    border-radius: 8px;
    @media (max-width: 500px) {
        max-width: 60px;
        margin: 0 15px;
    }
    `;

export const ContainerAmount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    max-width: 22%;
    `;

export const Amount = styled.span`
    color: white;
    font-size: 25px;
    `;

export const ButtonCart = styled.button`
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    color: black;
    font-weight: 900;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: linear-gradient(180deg, rgba(214,203,40,1) 0%, rgba(248,231,116,1) 100%);
        transition: all .4s ease;
    }
    @media (max-width: 500px) {
        font-size: 16px;
        padding: 6px;
    }
    `;