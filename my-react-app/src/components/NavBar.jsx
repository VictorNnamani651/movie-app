import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MyNavBar({ search_Query, setSearch_query }) {
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
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search_Query}
              onChange={setSearch_query}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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
