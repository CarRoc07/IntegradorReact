import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import {
    StyledFooter,
    SocialIconsContainer,
    SocialIconLink
} from './footerStyles'

const WatcherFooter = () => {
    return (
    <StyledFooter>
        <SocialIconsContainer>
        <SocialIconLink href="https://www.instagram.com">
            <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="https://www.facebook.com">
            <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="https://api.whatsapp.com/send?phone=543534772348">
            <FaWhatsapp />
        </SocialIconLink>
        </SocialIconsContainer>
        <p>Todos los derechos reservados © 2023 Watcher</p>
    </StyledFooter>
    );
};

export default WatcherFooter;