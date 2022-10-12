import React from "react";
import {Container, Logo, Menu, MenuItem} from "./styles";

const Navbar: React.FC = () => (
    <>
        <Container>
            <Logo>Aeon.com</Logo>
            <Menu>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Container>
    </>
)

export default Navbar

