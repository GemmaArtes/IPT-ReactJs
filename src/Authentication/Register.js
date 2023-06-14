import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
  };

  const isPasswordValid = (value) => {
    const regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return regx.test(value);
  };

  const [full, setFull] = useState("");
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { first_name, last_name, username, email, password, confirm_password } =
    data;

  const [errorfirstname, setErrorfirstname] = useState("");
  const [errorlastname, setErrorlastname] = useState("");
  const [erroremail, setErroremail] = useState("");
  const [errorusername, setErrorusername] = useState("");
  const [errorpassword, setErrorpassword] = useState("");
  const [errorconfirmpassword, setErrorconfirmpassword] = useState("");
  const [errorbothpassword, setErrorbothpassword] = useState("");
  const [success, setSuccess] = useState("");

  const [msg, setMsg] = useState("");

  const formValidation = () => {
    if (!first_name.trim() || first_name.length < 3) {
      return setErrorfirstname("Invalid name!");
    }
    if (!last_name.trim() || last_name.length < 3) {
      return setErrorlastname("Invalid name!");
    }
    if (!isValidEmail(email)) {
      return setErroremail("Invalid email!");
    }
    if (!username.trim() || username.length < 3) {
      return setErrorusername("Invalid username!");
    }
    if (!isPasswordValid(password)) {
      return setErrorpassword(
        "Invalid Password must contain: Atleast one digit and special character, 8 to 16 characters!"
      );
    }
    if (!isPasswordValid(confirm_password)) {
      return setErrorconfirmpassword(
        "Invalid Password must contain: Atleast one digit and special character, 8 to 16 characters!"
      );
    }
    if (password != confirm_password) {
      return setErrorbothpassword("Password does not match!");
    }
    return true;
  };
  const submit = () => {
    if (first_name.trim() || first_name.length > 3) {
      setErrorfirstname("");
    }
    if (last_name.trim() || last_name.length > 3) {
      setErrorlastname("");
    }

    if (username.trim() || username.length >= 11) {
      setErrorusername("");
    }
    if (isValidEmail(email)) {
      setErroremail("");
    }
    if (isPasswordValid(password)) {
      setErrorpassword("");
    }
    if (isPasswordValid(confirm_password)) {
      setErrorconfirmpassword("");
    }
    if (password == confirm_password) {
      setErrorbothpassword("");
    }
    if (formValidation()) {
      console.log(data);
      axios
        .post("http://localhost:8000/api/v1/accounts/users/", data, {})
        .then((response) => {
          console.log(response.data);
          setData("");
          setSuccess(
            "Registered Successfully! Please check your email for activation!"
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="regcontainer">
      <div className="regform">
        <text className="regtxt">REGISTRATION</text>
        {success ? (
          <>
            <p className="succescolor">{success}</p>
          </>
        ) : null}
        <div className="names">
          <text className="em">First Name</text>
          <div className="column">
            <input
              type="text"
              className="regfull"
              value={first_name}
              onChange={(event) => {
                setData({ ...data, first_name: event.target.value });
              }}
            />

            {errorfirstname ? (
              <p className="msgcolor errorposition">{errorfirstname}</p>
            ) : null}
          </div>

          <text className="em">Last Name</text>
          <div className="column">
            <input
              type="text"
              className="regfull"
              value={last_name}
              onChange={(event) => {
                setData({ ...data, last_name: event.target.value });
              }}
            />

            <p className="msgcolor errorposition">{errorlastname}</p>
          </div>
        </div>
        <div className="names">
          <text className="em">Email</text>
          <div className="column">
            <input
              type="email"
              className="regemail"
              value={email}
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
            />

            <p className="msgcolor errorposition">{erroremail}</p>
          </div>

          <text className="em">Username</text>
          <div className="column">
            <input
              type="text"
              className="reguser"
              value={username}
              onChange={(event) => {
                setData({ ...data, username: event.target.value });
              }}
            />

            <p className="msgcolor error1position">{errorusername}</p>
          </div>
        </div>
        <div className="names">
          <text className="em">Password</text>
          <input
            type="password"
            className="regpass"
            value={password}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />

          <p className="msgcolor error1position">{errorpassword}</p>
          <p className="msgcolor error1position">{errorbothpassword}</p>

          <text className="em">Confirm Password</text>
          <input
            type="password"
            className="regpass"
            value={confirm_password}
            onChange={(event) => {
              setData({ ...data, confirm_password: event.target.value });
            }}
          />

          <p className="msgcolor error1position">{errorconfirmpassword}</p>
          <p className="msgcolor error1position">{errorbothpassword}</p>
        </div>

        <text className="dyhaa">Have an account? <Link to="/" className="reg"> Click here to LOGIN </Link></text>

        <button className="btn" type="button" onClick={submit}>
          <text className="txt">Submit</text>
        </button>
        <p className="msgcolor msgposition">{msg}</p>
      </div>
    </div>
  );
};

export default Register;