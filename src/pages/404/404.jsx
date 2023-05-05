import React from 'react'
import { Link } from 'react-router-dom';
import {
    ContainerError,
    TitleError,
    SubTitle,
    ButtonHome
} from './404Styles'

const NotFound = () => {
    return (
        <ContainerError>
            <TitleError>404 <b style={{color:'white'}}>ERROR!</b> </TitleError>
            <SubTitle> Parece que la página que buscás <b>no existe</b>  o <b>fue removida</b> </SubTitle>
            <Link to='/'>
                <ButtonHome>
                    Ir a Inicio
                </ButtonHome>
            </Link>
        </ContainerError>
        
    )
}

export default NotFound;