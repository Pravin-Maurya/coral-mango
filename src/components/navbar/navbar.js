import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AppNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Table</Nav.Link>
          <Nav.Link href="card-list">Card List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;
