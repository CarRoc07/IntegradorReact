import styled from 'styled-components'

export const ContainerCart = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    background: url("https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg");
    padding: 0;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    `;

export const ContainerTitle = styled.div`
    width: 100%;
    margin: 0;
    `;

export const Title = styled.h2`
    color: white;
    margin: 0px;
    font-size: 42px;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 36px;
    }
    `;

export const Containerproducts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    `;

export const ContainerTotal = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 2px dashed;
    gap: 10px;
    font-family: 'Merriweather';
    padding: 5px 0px;
    `;

export const SubtotalContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    font-size: 23px;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 19px;
    }
    `

export const CostShippingContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    font-size: 23px;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 19px;
    }
    `

export const TotalInfo = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    font-size: 30px;
    font-weight: 900;
    @media (max-width: 500px) {
        font-size: 28px;
    }
    `

export const SegmentText = styled.p`
    margin: 0;
    padding: 0;
    `