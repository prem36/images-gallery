import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "rgba(126, 182, 172, 0.8)",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: "14rem", maxHeight: "3rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
