import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../../../CartIcon/CartWidget';
import Stack from 'react-bootstrap/Stack';


const NavBar = () => {
  return (
    <div className='nav-container'>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Muebleria Lima</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
              <Nav.Link href="#link"><CartWidget></CartWidget></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar
