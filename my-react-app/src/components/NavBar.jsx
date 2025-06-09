import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavBar() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <div className="container-lg">
        <Navbar.Brand href="#home" className="text-warning fw-bold">
          Movie-App
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-3 fw-bolder text-warning">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bolder text-warning">
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavBar;
