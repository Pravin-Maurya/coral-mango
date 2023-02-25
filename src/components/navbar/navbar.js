import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const AppNavbar = () => {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    const storedDetails = localStorage.getItem("username");

    if (storedDetails) {
      setUsername(JSON.parse(storedDetails));
      console.log(setUsername);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Table</Nav.Link>
          <Nav.Link href="card-list">Card List</Nav.Link>
          {!userName && <Nav.Link href="login">Login</Nav.Link>}
        </Nav>
      </Container>
      <Button onClick={logout} style={{ marginRight: "10px" }}>
        Logout
      </Button>
    </Navbar>
  );
};
export default AppNavbar;
