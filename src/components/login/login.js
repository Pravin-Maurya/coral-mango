import "./login.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const loginDemo = (event) => {
    event.preventDefault();

    if (username === "demo@coralmango.com" && password === "demo123") {
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/", { replace: true });
      window.location.reload();
    } else {
      if (username === "") {
        setUsernameErr("Please enter username");
      }

      if (password === "") {
        setPasswordErr("Please Enter Password");
      } else {
        setErrorMsg("Invalid Credentials!");
      }
    }
  };
  useEffect(() => {
    const storedDetails = localStorage.getItem("username");
    if (storedDetails) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="topContainer">
      <div className="login-container">
        <h3 className="title">Demo Login</h3>
        <hr className="horizontal-line" />
        <form className="form" onSubmit={loginDemo}>
          <div className="input-container">
            <label className="input-lebel">
              Username<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="Username"
              name="Username"
              id="Username"
              placeholder="Enter your Username "
              className="input-field"
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && <p className="errMsg">{usernameErr}</p>}
          </div>
          <div className="input-container">
            <label className="input-lebel">
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p className="errMsg">{passwordErr}</p>}
          </div>

          <Button variant="primary" className="submitButton" type="submit">
            Login
          </Button>
          {errorMsg && <p className="errMsg">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
