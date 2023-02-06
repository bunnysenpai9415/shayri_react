// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className=''>
      <Container>
        <Navbar.Brand href="#/">Wednesday</Navbar.Brand>
        <Navbar.Toggle className='justify-content-end' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 "
            navbarScroll
          >
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/jaunelia">Jaun Elia</Nav.Link>
            <Nav.Link href="#/mohsinnaqvi">Mohsin Naqvi</Nav.Link>
            <Nav.Link href="#/mirzagalib">Mirza Galib</Nav.Link>
            <NavDropdown title="Video" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#/nusrat">Nusrat Fatah Ali</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/coke-studio">
               Coke Studio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/shayari">
                Shayari
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;