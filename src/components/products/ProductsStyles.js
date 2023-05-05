import styled from 'styled-components';

export const PaginationContainer = styled.div`
    padding: 5px;
    `

export const ButtonPagination = styled.button`
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    padding: 8px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    margin: 5px;
    font-size: 20px;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.9;
    }
    @media (max-width: 600px) {
        font-size: 17px;
    }
    `

export const CardWrapper = styled.div`
    width: 180px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    color: white;
    font-family: 'Merriweather';
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 850px) {
        width: 140px;
    }
    @media (max-width: 600px) {
        width: 120px;
        padding: 10px;
    }
`;

export const CardImage = styled.img`
    width: auto;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 12px;
    @media (max-width: 550px) {
        height: 110px;
    }
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 550px) {
        font-size: 16px
    }
`;

export const CardPrice = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
    margin-bottom: 6px;
    @media (max-width: 550px) {
        font-size: 13px
    }
`;

export const AddToCartButton = styled.button`
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: linear-gradient(180deg, rgba(214,203,40,1) 0%, rgba(248,231,116,1) 100%);
        transition: all .4s ease;
    }

    @media (max-width: 550px) {
        font-size: 12px
    }
`;

export const InfoContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    `

export const ContainerProducts = styled.div`
    max-width: 1300px;
    background: url("https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg");
    padding: 40px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 16px;
    margin: 0 auto;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        max-width: 600px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        max-width: 1200px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        max-width: 600px;
    }

    @media (max-width: 550px) {
        max-width: 900px;
        grid-template-columns: repeat(2, minmax(120px, 1fr));
        grid-gap: 8px;
    }
`;