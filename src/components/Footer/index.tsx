import React from "react";
import {Container, FooterNav, FooterNavItem} from "./styles";

const Footer: React.FC = () => (
    <>
        <Container>
            <FooterNav>
                <FooterNavItem>Terms and Conditions</FooterNavItem>
                <FooterNavItem>Privacy notice</FooterNavItem>
            </FooterNav>
        </Container>
    </>
)

export default Footer