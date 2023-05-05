import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: url("https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712691/32052_aykekq.jpg");
    color: #fff;
    text-align: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px 0px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.33);
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

export const SocialIconLink = styled.a`
    margin: 0 10px;
    color: #fff;
    font-size: 20px;
    transition: color 0.2s ease-in-out;
    &:hover {
    color: #eaeaea;
    }
`;