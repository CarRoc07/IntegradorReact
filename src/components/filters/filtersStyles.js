import styled from 'styled-components'

export const ContainerFilters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    gap: 10px;
    `;

export const ContainerFilter = styled.div`
    border: 3px solid white;
    cursor: pointer;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    background-color: ${({ selected }) =>
        selected ? 'white' : ''};
    color: ${({ selected }) =>
        selected ? 'black' : 'white'};
    &:hover{
        background-color: white;
        transition: all .7s ease;
    }
    font-family: 'Merriweather';

    @media (max-width: 850px) {
        width: 135px;
    }
    @media (max-width: 650px) {
        width: 100px;
    }
    @media (max-width: 500px) {
        width: 70px;
    }

    `
export const ImgWatch = styled.img`
    width: 150px;
    height: 150px;
    margin: 0;

    @media (max-width: 1050px) {
        display: none;
    }
    `
export const Title = styled.h3`
    color: ${({ selected }) =>
        selected ? 'black' : 'white'};
    text-align: center;
    margin: 0;
    font-weight: 800;
    ${ContainerFilter}:hover & {
        color: black;
    }
    @media (max-width: 500px) {
        font-size: 13px;
    }
    `