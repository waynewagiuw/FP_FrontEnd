import {Navbar, Container, Nav} from "react-bootstrap";
import { navLinks } from "../data/index";
const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => {
              return (
                <div key={link.id}>
                  <Nav.Link href="#home">Home</Nav.Link>
                </div>
              );
            })}
            <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars