// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React from "react";
import "./login-page.styles.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import InputField from "../../components/input-field/input-field.component";
import { submitted, setLoginUser } from "../../redux/isLogin.reducers";
import path from "../../constants/paths";
import carVidio from "../../assets/carVidio.mp4";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitEvent = async (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    var emailNotFound = true;

    try {
      await axios({
        method: "post",
        url: "https://bid-my-ride-server.onrender.com/user/login",
        data: {
          email: uname.value,
          password: pass.value,
        },
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.data.status) {
            emailNotFound = false;
            localStorage.setItem("token", res.data.token);
            dispatch(submitted());
            dispatch(setLoginUser(res.data.user));
            navigate(path.HOME);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    if (emailNotFound) {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="app_login">
      <div className="video-wrapper">
        <video autoPlay loop muted>
          <source src={carVidio} type="video/mp4" />
        </video>
      </div>
      <div className="login_div">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="title_login_bid" style={{ fontSize: "20px" }}>
            BID<span style={{ color: "#1091e1" }}>MY</span>RIDE
          </div>
          <div className="title_login">
            <b>Login</b>
          </div>
        </div>

        <div className="form">
          <form onSubmit={submitEvent}>
            <div className="input-con-login">
              <InputField
                type="email"
                name="uname"
                required
                id="uname"
                label="Email ID :"
                pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$"
              />
            </div>

            <div className="input-con-login">
              <InputField
                type="password"
                name="pass"
                required
                id="pass"
                label="Password :"
              />
            </div>

            <div className="button_con_login">
              <Button type="submit">Submit</Button>
            </div>

            <br />
            <h4 style={{ textAlign: "right" }}>
              <Link
                style={{
                  color: "#1091e1",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                to={path.FORGOT}
              >
                forgot password?
              </Link>
            </h4>
            <br />
            <div className="sign-up-option">
              <h4
                style={{
                  fontSize: "12px",
                }}
              >
                Don't have an account?{" "}
                <Link
                  style={{
                    color: "#1091e1",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                  to={path.REGISTRATION}
                >
                  Create One
                </Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
