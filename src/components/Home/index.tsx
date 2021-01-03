import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import spaceXLogo from "../../images/spacex-logo.png";
import spaceXBackground from "../../images/spaceX-background.jpg";
import Typical from "react-typical";

export const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" expand="lg">
        <Navbar.Brand href="#home">
          <img src={spaceXLogo} alt="spaceX Logo" width={"40px"} />
          <span className="navbar-heading">SPACEX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Launches</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="spaceX-background">
        <Typical
          steps={["Welcome To SpaceX", 2000, "Ticket To MARS! 😂", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <div className="description">
          <span>
            <strong>SpaceX </strong>
          </span>
          <span>A company where innovators meet!</span>
        </div>
      </div>
    </div>
  );
};
