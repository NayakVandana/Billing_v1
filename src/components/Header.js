import { Container, Nav, Navbar, NavDropdown, Col, Row } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-lg-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link
                href="#action1"
                className="text-start text-sm-start text-md-start"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text-start text-sm-start text-md-start"
              >
                Link
              </Nav.Link>
              <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
                className="text-start text-sm-start text-md-start"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#"
                disabled
                className="text-start text-sm-start text-md-start"
              >
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
