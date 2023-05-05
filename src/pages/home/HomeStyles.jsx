import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    padding: 40px 60px;
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg');
    display:flex;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0px;
    background-position: center;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.33);
    `;

export const ContainerHero = styled.div`
    display:flex;
    align-items: center;
    color:white;
    width: 100%;
    padding: 50px 0px;
    margin: 0;
    @media (max-width: 700px) {
        padding: 20px 0px;
    }
    `;

export const ContainerDesc = styled.div`
    padding:40px;
    font-family: 'Merriweather';
    & > h1 {
        font-size: 51px;
        @media (max-width: 1050px) {
            font-size: 40px;
        }
        @media (max-width: 600px) {
            font-size: 30px;
        }
    
    & > h3 {
        font-size: 26px;
        font-weight: lighter;
        @media (max-width: 1050px) {
            font-size: 20px;
        }
        @media (max-width: 1050px) {
            font-size: 16px;
        }
    }
    }
    `;

export const ContainerImg = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    color:black;
    padding: 14px;
    padding-right: 0px;
    padding-top: 50px;
    background: white;
    width:40%;
    margin: 0;
    font-family: 'Alkatra';
    text-align: center;

    @media (max-width: 1050px) {
        display: none;
    }
    `;

export const BackColorImg = styled.div`
    background: linear-gradient(0deg, rgba(65,62,62,1) 0%, rgba(198,198,193,1) 100%);
    max-width: 400px;
    display:flex;
    align-items: center;
    justify-content:center;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.53);
    border: 1px solid black;
    `;

export const Divider = styled.div`
    width: 100%;
    min-height: 50px;
    background: white;
    padding:0px;
    text-align:center;
    font-family: 'Alkatra';
    border-top: 3px solid grey;
    border-bottom: 3px solid black;
    & > h1 {
        font-size: 55px;
        margin: 0;
        @media (max-width: 1050px) {
            font-size: 35px;
        }
        @media (max-width: 600px) {
            font-size: 30px;
        }
        @media (max-width: 450px) {
            font-size: 27px;
        }
    }
    & > h3 {
        font-size: 27px;
    }
    `;

export const ButtonHero = styled.button`
    min-width: 350px;
    padding: 20px 15px;
    background: linear-gradient(180deg, rgba(248,231,116,1) 0%, rgba(214,203,40,1) 100%);
    cursor:pointer;
    border: 1px solid;
    font-size: 20px;
    color: #b87b0a;
    font-family: 'Merriweather';
    font-weight: 700;
    &:hover {
        background: linear-gradient(180deg, rgba(214,203,40,1) 0%, rgba(248,231,116,1) 100%);
        transition: all .4s ease;
    }
    @media (max-width: 600px) {
        min-width: 200px;
    }
    `;

export const ContainerImgTop = styled.div`
    width: 100%;
    `;