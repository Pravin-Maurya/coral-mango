import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

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
    <>
      <Navbar className="navContainer">
        <ul className="linkContainer">
          <li className="linkList">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeClassName" : "inActiveClassName"
              }
            >
              Table
            </NavLink>
          </li>
          <li className="linkList">
            <NavLink
              to="/card-list"
              className={({ isActive }) =>
                isActive ? "activeClassName" : "inActiveClassName"
              }
            >
              Card List
            </NavLink>
          </li>
          {!userName && (
            <li className="linkList">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "activeClassName" : "inActiveClassName"
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {userName && (
          <div className="nameLogoutContainer">
            <p>{userName}</p>
            <Button onClick={logout} style={{ marginRight: "10px" }}>
              Logout
            </Button>
          </div>
        )}
      </Navbar>
      <hr />
    </>
  );
};
export default AppNavbar;
