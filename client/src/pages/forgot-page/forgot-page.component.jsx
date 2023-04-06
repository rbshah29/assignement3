// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React, { useState } from "react";
import "./forgot-page.styles.scss";
import { Link } from "react-router-dom";
import InputField from "../../components/input-field/input-field.component";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import path from "../../constants/paths";
import carVidio from "../../assets/carVidio.mp4";
import axios from "axios";

export default function ForgotPage() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitEvent = (event) => {
    event.preventDefault();
    if (inputs.pass === inputs.cpass) {
      try {
        axios({
          method: "post",
          url: "https://bid-my-ride-server.onrender.com/user/forgotpassword",
          data: {
            email: inputs.email,
            password: inputs.pass,
          },
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => {
            if (res.data.status) {
              alert("Password is succesfully updated");
              navigate(path.LOGIN);
            } else {
              alert("Email not found.");
              console.log(res.data.message);
            }
          })
          .catch((error) => {
            alert(error.response.data.message);
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password dose not match.");
    }
  };

  return (
    <div className="app_forgot">
      <div className="video-wrapper_forgot">
        <video autoPlay loop muted>
          <source src={carVidio} type="video/mp4" />
        </video>
      </div>
      <div className="forgot_div">
        <div className="forget_form">
          <form>
            <div className="forgot_tittle_div">
              <span style={{ color: "#1091e1", fontWeight: "bold" }}>
                Forgot
              </span>{" "}
              Password
            </div>

            <div className="input-con-login">
              <InputField
                type="email"
                name="email"
                pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$"
                value={inputs.email || ""}
                onChange={handleChange}
                required
                autoComplete="off"
                title="Enter valid emailID"
                label="Email ID:"
              />
            </div>

            <div className="input-con-login">
              <InputField
                type="password"
                name="pass"
                value={inputs.pass || ""}
                onChange={handleChange}
                required
                autoComplete="off"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$"
                title="Password should atlist 8 charecter with alpha (Capital & small)-numeric and special characters"
                label="Set new Password:"
              />
            </div>

            <div className="input-con-login">
              <InputField
                type="password"
                name="cpass"
                value={inputs.cpass || ""}
                onChange={handleChange}
                required
                autoComplete="off"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$"
                title="Password should atlist 8 charecter with alpha (Capital & small)-numeric and special characters"
                label="Confirm new Password:"
              />
            </div>

            <div onClick={submitEvent}>
              <Button>Submit</Button>
            </div>
          </form>
          <br />

          <h4 style={{ textAlign: "right", fontWeight: "bold" }}>
            <Link style={{ color: "#1091e1" }} to={path.LOGIN}>
              Back to Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
