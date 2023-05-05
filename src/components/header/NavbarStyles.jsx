
import styled from 'styled-components';


export const ContainerHeader = styled.div`
    background-image: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg');
    max-width: 1300px;
    margin: 0 auto;
    padding: 0px;
    height: 100px; 
    display:flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    `;

export const ContainerNavbar = styled.div`
    margin: 0 auto;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    width: 80%;
    border-radius: 12px;
    padding: 3px;
    color: white;
    `;

export const LogoNavbar = styled.img`
    width:200px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 140px;
    }
    @media (max-width: 450px) {
        width: 120px;
    }
    `;

export const ContainerLinks = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    width:75%;
    `;

export const UserNavStyled = styled.div`
    min-height: 25px;
    cursor: pointer;
    display:flex;
    align-items:center;
    span {
        color: white;;
        font-size: 1rem;  
        margin-right: 20px;
    }
    border: 1px dashed white;
    padding: 13px;
    cursor:pointer;
    &:hover {
        border: 1px solid;
        transition: all .75s ease;
    }
    & > span {
        @media (max-width: 600px) {
            display: none;
        }
    }
`;

export const CartNavStyled = styled.div`
    border: 1px dashed white;
    padding: 13px;
    min-height: 25px;
    cursor:pointer;
    &:hover {
        border: 1px solid;
        transition: all .75s ease;
    }
`;