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

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://localhost:5173/uploadImage">Add image</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Search by...
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
        </Form>
      </Container>
    </Navbar>

    </>
  );
}

export default myNavbar