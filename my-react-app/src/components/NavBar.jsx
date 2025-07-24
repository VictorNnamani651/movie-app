import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MyNavBar({ search_Query, setSearch_query }) {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <div className="container-lg">
        <Navbar.Brand as={Link} to={"/"} className="text-warning fw-bold">
          <i className="bi bi-film"></i> Movie-App
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form
            className="d-flex ms-auto mt-3 mt-md-0"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
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
            <Nav.Link
              as={Link}
              to={"/"}
              className="me-3 fw-bolder text-warning"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/Favorites"}
              className="fw-bolder text-warning"
            >
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavBar;
