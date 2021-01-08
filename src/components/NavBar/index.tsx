import React from "react";
import { Navbar } from "react-bootstrap";
import spaceXLogo from "../../images/spacex-logo.png";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar" expand="lg">
        <Navbar.Brand>
          <img src={spaceXLogo} alt="spaceX Logo" width={"40px"} />
          <span className="navbar-heading">SPACEX</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4" activeKey={window.location.pathname}>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Launches</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};
