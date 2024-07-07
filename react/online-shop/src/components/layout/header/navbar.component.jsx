/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getAuthenticatedUser } from "../../../services/authenticatedUserServices";

const navbarComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      if (cookies.comercial) {
        const user = await getAuthenticatedUser();
        setUser(user);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  function userLogin() {
    localStorage.setItem("userType", "user");
  }

  function adminLogin() {
    localStorage.setItem("userType", "admin");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navColor" dir="rtl">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-5">
              <li className="nav-item mx-2 my-3">
                <Link className="nav-link linkColor" to="/">
                  صفحه اصلی
                </Link>
              </li>
              <li className="nav-item dropdown mx-2 my-3" dir="rtl">
                <Link
                  className="nav-link dropdown-toggle linkColor"
                  role="button"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  دسته بندی ها{" "}
                </Link>
                <ul className="dropdown-menu dropdownMenu">
                  <li>
                    <Link></Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2 my-3">
                <Link
                  className="nav-link linkColor"
                  to="/login"
                  onClick={userLogin}
                >
                  پنل کاربر
                </Link>
              </li>
              <li className="nav-item mx-2 my-3">
                <Link
                  className="nav-link linkColor"
                  to="/login"
                  onClick={adminLogin}
                >
                  پنل مدیر
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto me-5">
              <li className="nav-item ms-3">
                <Link to="/smsForm" className="nav-link linkColor">
                  <img src={"/uploads/icons/user.svg"} alt="icon" />
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="" className="nav-link linkColor"></Link>
              </li>
              <li className="nav-item ms-5">
                <button className="callButton">
                  <a href="/" className="nav-link linkCallToMe text-light">
                    تماس با ما
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbarComponent;
