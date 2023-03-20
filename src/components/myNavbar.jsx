import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function myNavbar() {
  return (
    <>

    <Navbar style={{margin:"0 2.5rem 0 2.5rem", borderRadius:"0.625rem", border:"2px solid #d63384"}} bg='secondary' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:5173/">My Favourite Images</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="http://localhost:5173/home">Home</Nav.Link>
          <Nav.Link href="http://localhost:5173/gallery">Gallery</Nav.Link>
          <Nav.Link href="http://localhost:5173/uploadImage">Add Image</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default myNavbar