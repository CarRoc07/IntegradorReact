import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import CartIcon from '../UI/CartIcon/iconCart';
import {
    ContainerHeader,
    ContainerNavbar,
    LogoNavbar,
    ContainerLinks,
    UserNavStyled,
    CartNavStyled,
} from './NavbarStyles';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            <ContainerNavbar>
                <div>
                <Link to="/">
                    <LogoNavbar src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680739046/My_prot-1_zj9zul.png" alt="Logo of page" />
                </Link>
                </div>
                <ContainerLinks>
                    <CartNavStyled>
                        <Link to='/cart'>
                            <CartIcon />
                        </Link>
                    </CartNavStyled >
                    <UserNavStyled onClick={() => navigate('/login')}>
                        <span> Inicia sesion </span>
                        <FaUserAlt />
                    </UserNavStyled>
                </ContainerLinks>
            </ContainerNavbar>
        </ContainerHeader>
    );
    };
    
    export default Navbar;