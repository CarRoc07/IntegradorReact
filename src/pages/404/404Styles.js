import styled from 'styled-components';

export const ContainerError = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg');
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    border-top: 2px solid white;
    `;

export const TitleError = styled.h1`
    font-size: 70px;
    color: #a50c0c;
    margin: 0;
    text-align: center;
    `;

export const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
    color: white;
    text-align: center;
    `;

export const ButtonHome = styled.button`
    width: 150px;
    padding: 20px 15px;
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    cursor:pointer;
    border: none;
    display: none;
    font-size: 20px;
    color: #b87b0a;
    font-family: 'Merriweather';
    font-weight: 700;
    &:hover {
        background: linear-gradient(180deg, rgba(214,203,40,1) 0%, rgba(248,231,116,1) 100%);
        transition: all .4s ease;
    }
    `;