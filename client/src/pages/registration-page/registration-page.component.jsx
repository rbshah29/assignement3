// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registration-page.styles.scss";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import InputField from "../../components/input-field/input-field.component";
import path from "../../constants/paths";
import carVidio from "../../assets/carVidio.mp4";
import axios from "axios";
import { useDispatch } from "react-redux";
import { submitted, setLoginUser } from "../../redux/isLogin.reducers";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputs.pass === inputs.cpass) {
      try {
        await axios({
          method: "post",
          url: "https://bid-my-ride-server.onrender.com/user/signup",
          data: {
            firstName: inputs.fname,
            lastName: inputs.lname,
            email: inputs.email,
            password: inputs.pass,
          },
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => {
            if (res.data.status) {
              localStorage.setItem("token", res.data.token);
              dispatch(submitted());
              dispatch(setLoginUser(res.data.user));
              navigate(path.HOME);
            } else {
              alert(res.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };
  return (
    <>
      <div className="app_registration">
        <div className="video-wrapper_Reg">
          <video autoPlay loop muted>
            <source src={carVidio} type="video/mp4" />
          </video>
        </div>
        <div className="registration_div">
          <div className="form">
            <div className="reg_tile">
              <span style={{ color: "#1091e1" }}>Create</span> Account
            </div>
            <form onSubmit={handleSubmit}>
              <div className="regis-input-con">
                <InputField
                  type="text"
                  name="fname"
                  value={inputs.fname || ""}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  pattern="^[A-Za-z ]{1,25}$"
                  title="Only contain upto 25 letters"
                  label="First Name:"
                />
              </div>

              <div className="regis-input-con">
                <InputField
                  type="text"
                  name="lname"
                  value={inputs.lname || ""}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  pattern="^[A-Za-z ]{1,25}$"
                  title="Only contain upto 25 letters"
                  label="Last Name"
                />
              </div>

              <div className="regis-input-con">
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

              <div className="regis-input-con">
                <InputField
                  type="password"
                  name="pass"
                  value={inputs.pass || ""}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$"
                  title="Password should atlist 8 charecter with alpha (Capital & small)-numeric and special characters"
                  label="Password:"
                />
              </div>

              <div className="regis-input-con">
                <InputField
                  type="password"
                  name="cpass"
                  value={inputs.cpass || ""}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  label="Confirm Password:"
                />
              </div>

              <div className="button_con_regi">
                <Button type="submit">Submit</Button>
              </div>
              <br />
              <div className="sign-up-option">
                <h4>
                  Already have account?{" "}
                  <Link
                    style={{ color: "#1091e1", fontWeight: "bold" }}
                    to={path.LOGIN}
                  >
                    Sign In
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
