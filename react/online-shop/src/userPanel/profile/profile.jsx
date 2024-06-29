import RightMenu from "../rightMenu";
import UserNavbar from "../userNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [persianDate, setPersianDate] = useState();
  const [user, setUser] = useState();

  const getPersianDate = async () => {
    await axios.get("http://localhost:4000/persianDate").then((res) => {
      setPersianDate(res.data);
    });
  };

  const verifyUser = async () => {
    await axios
      .get(
        "http://localhost:4000/userPanel",

        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.user);
        }
      });
  };

  useEffect(() => {
    getPersianDate();
    verifyUser();
  }, []);
  return (
    <>
      <UserNavbar />
      <div className="container-fluid">
        <div className="row">
          <RightMenu />
          <div className="col-10">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p className="faField">پیشخوان / پروفایل کاربر</p>
              </div>
              <div className="d-flex justify-content-start parsianDate faField">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img
                  src="/uploads/icons/plus-square-black.svg"
                  alt="ویرایش کاربر"
                  className="ms-1"
                />
                پروفایل کاربر
              </div>

              <div className="addBody col-8 mx-5">
                {user && (
                  <form className="mx-5">
                    <div className="row col-5 userForm">
                      <div>
                        <input
                          type="text"
                          className="form-control mt-3 faField"
                          placeholder="نام"
                          name="firstName"
                          value={user.firstName}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          className="form-control mt-3 faField"
                          placeholder="نام خانوادگی"
                          name="lastName"
                          value={user.lastName}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <input
                          type="email"
                          className="form-control mt-3 enField"
                          placeholder="ایمیل"
                          name="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          className="form-control mt-3 faField"
                          placeholder="شماره همراه"
                          name="phoneNumber"
                          value={user.phoneNumber}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <input
                          type="password"
                          className="form-control mt-3 enField"
                          placeholder="کلمه عبور"
                          name="password"
                          id="password"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <i
                          className="bi bi-eye-slash passwordEye"
                          id="togglePassword"
                        ></i>
                        <input
                          type="password"
                          className="form-control mt-3 enField"
                          placeholder="تکرار کلمه عبور"
                          name="confirmPassword"
                          id="confirmPassword"
                        />
                        <i
                          className="bi bi-eye-slash confirmPasswordEye"
                          id="toggleConfirmPassword"
                        ></i>
                      </div>

                      <div className="col-8 mt-2 mx-5">
                        <input
                          type="submit"
                          value="ویرایش"
                          className="mt-3 btn btn-success w-100"
                        />
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
