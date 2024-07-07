import { Link, useNavigate } from "react-router-dom";
import "../public/css/shop/login.css";
import { useEffect, useState } from "react";
// import Home from "../main/home";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("ariaghiasi@gmail.com");
  const [password, setPassword] = useState("1024");
  const navigate = useNavigate();

  async function userLogin(e) {
    let data = {
      email: email,
      password: password,
    };
    e.preventDefault();
    await axios
      .post("http://localhost:4000/login", data, {
        withCredentials: "include",
      })
      .then((res) => {
        if (res.status) {
          navigate("/dashboard");
        }
      });
  }

  return (
    <>
      <div className="registerForm">
        <div className="register">
          <h3>به اکسپرس کارت خوش آمدید .</h3>
          <p>تا کنون ثبت نام نکرده اید ؟</p>
          <Link
            to={"/register"}
            className="btn btn-outline-success mt-2"
            role="button"
          >
            ثبت نام
          </Link>
        </div>
        <div className="loginForm">
          <h2 className="mt-5">ورود به سایت</h2>
          <form onSubmit={(e) => userLogin(e)}>
            <div className="mb-3 mt-5">
              <input
                type="email"
                className="form-control mt-5"
                placeholder="ایمیل"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                className="form-control mt-5"
                placeholder="کلمه عبور"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="row">
              <div className="d-grid gap-2 col-10 mx-auto float-end mt-3">
                <button type="submit" className="btn btn-success">
                  ورود به سایت
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <Link to={"/"}>بازگشت به صفحه اصلی</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
