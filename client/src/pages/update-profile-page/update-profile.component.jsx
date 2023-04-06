// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import InputField from "../../components/input-field/input-field.component";
import path from "../../constants/paths";
import { notSubmitted } from "../../redux/isLogin.reducers";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./update-page.styles.scss";

export default function UpdateProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://bid-my-ride-server.onrender.com/user/updateprofile",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (mounted) {
          if (res.data.status) {
            setFirstname(res.data.user.firstName);
            setLastname(res.data.user.lastName);
            setEmail(res.data.user.email);
          } else {
            alert(res.data.message);
            dispatch(notSubmitted());
            navigate(path.LOGIN);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setMounted(false);
    };
  }, [dispatch, mounted, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === cpassword) {
      try {
        axios({
          method: "post",
          url: "https://bid-my-ride-server.onrender.com/user/updateprofile",
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
          data: {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
          },
        })
          .then((res) => {
            if (res.data.status) {
              localStorage.removeItem("token");
              localStorage.setItem("token", res.data.newToken);
              alert(res.data.message);
              navigate(path.HOME);
            } else if (!res.data.userUpdate) {
              alert(res.data.message);
            } else {
              alert(res.data.message);
              navigate(path.LOGIN);
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
      <div
        style={{
          height: "auto",
        }}
        className="app_update"
      >
        <div className="update_div">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="update-input-con">
                <InputField
                  type="text"
                  name="fname"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  required
                  autoComplete="off"
                  pattern="^[A-Za-z ]{1,25}$"
                  title="Only contain upto 25 letters"
                  label="First Name:"
                />
              </div>

              <div
                style={{
                  paddingTop: "14px",
                }}
                className="update-input-con"
              >
                <InputField
                  type="text"
                  name="lname"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  required
                  autoComplete="off"
                  pattern="^[A-Za-z ]{1,25}$"
                  title="Only contain upto 25 letters"
                  label="Last Name:"
                />
              </div>

              <div
                style={{
                  paddingTop: "14px",
                }}
                className="update-input-con"
              >
                <InputField
                  type="email"
                  name="email"
                  pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  autoComplete="off"
                  title="Enter valid emailID"
                  label="Email ID:"
                />
              </div>

              <div
                style={{
                  paddingTop: "14px",
                }}
                className="update-input-con"
              >
                <InputField
                  type="password"
                  name="pass"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="off"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$"
                  title="Password should atlist 8 charecter with alpha (Capital & small)-numeric and special characters"
                  label="Update Password: (Optional)"
                />
              </div>

              <div
                style={{
                  paddingTop: "14px",
                }}
                className="update-input-con"
              >
                <InputField
                  type="password"
                  name="cpass"
                  value={cpassword}
                  onChange={(e) => {
                    setCpassword(e.target.value);
                  }}
                  autoComplete="off"
                  label="Confirm New Password:"
                />
              </div>

              <div
                style={{
                  paddingTop: "14px",
                  paddingBottom: "0px",
                }}
                className="button_con_regi"
              >
                <Button type="submit">Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
