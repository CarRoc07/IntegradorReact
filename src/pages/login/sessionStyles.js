import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg');
    padding: 50px 0px;
    min-height: 56vh;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
`;

export const ContainerInputs = styled.div`
    `

export const FormFormik = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Input = styled.input`
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    color: white;
    background-color: transparent;
    &::placeholder {
        color: white;
    }
`;

export const Button = styled.button`
    min-width: 120px;
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    color: black;
    border: none;
    padding: 10px;
    margin: 10px 0;
    cursor:pointer;
    font-weight: 800;
    &:hover {
        background: linear-gradient(180deg, rgba(214,203,40,1) 0%, rgba(248,231,116,1) 100%);
        transition: all .4s ease;
    }
`;

export const Title = styled.h2`
    color:white;
    text-align: center;
    font-size: 40px;
    `

export const ToSignUp = styled.p`
    color:white;
    margin: 10px 0px; 
    `;

export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 5px;
    color: #fb103d;
    font-size: 14px;
`;

export const ToLogin = styled.p`
    color:white;
    margin: 10px 0px; 
`;