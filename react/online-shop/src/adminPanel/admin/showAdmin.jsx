import { React, useEffect, useState } from "react";
import axios from "axios";
import "../../css/admin/admin.css";

import AdminNavbar from "../adminNavbar";
import { useParams, useNavigate } from "react-router-dom";
import { getPersianDateService } from "../../services/date.services";
import { getAdminServices } from "../../services/admin.services";

const ShowAdmin = () => {
  const [persianDate, setPersianDate] = useState("");
  const [values, setValues] = useState({});
  const [adminId, setAdminId] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const getAdmin = () => {
    getAdminServices(params).then((res) => {
      setValues(res);
    });
  };

  useEffect(() => {
    getPersianDateService().then((res) => {
      setPersianDate(res);
    });
    params && getAdmin(params);
  }, []);

  useEffect(() => {
    setAdminId(values._id);
  }, [values]);

  const updateAdmin = async () => {
    await axios
      .put(
        `http://localhost:4000/adminPanel/admin/updateAdmin/${adminId}`,
        {
          ...values,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status) {
          navigate("/admin/allAdmins");
        }
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / ویرایش مدیر</p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>
            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  className="px-1 faField"
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="addAdmin"
                />
                ویرایش مدیر
              </div>

              <div className="addBody col-9 mx-3">
                <form onSubmit={(event) => updateAdmin(event)}>
                  <div className="row g-2">
                    <div className="mx-4 col-5">
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        value={values.firstName}
                        placeholder="نام"
                        name="firstName"
                        onChange={(event) =>
                          setValues({
                            ...values,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        value={values.lastName}
                        placeholder="نام خانوادگی"
                        name="lastName"
                        onChange={(event) =>
                          setValues({
                            ...values,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <input
                        type="email"
                        className="form-control mt-3 enField"
                        value={values.email}
                        placeholder="ایمیل"
                        name="email"
                        onChange={(event) =>
                          setValues({
                            ...values,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <select
                        className="form-select mt-3 faField"
                        value={values.department}
                        name="department"
                        onChange={(event) =>
                          setValues({
                            ...values,
                            [event.target.name]: event.target.value,
                          })
                        }
                      >
                        <option selected>مدیریت</option>
                        <option>پشتیبانی</option>
                      </select>
                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        value={values.password}
                        placeholder="کلمه عبور"
                        name="password"
                        id="password"
                        onChange={(event) =>
                          setValues({
                            ...values,
                            [event.target.name]: event.target.value,
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
                        value={values.password}
                        placeholder="تکرار کلمه عبور"
                        name="confirmPassword"
                        id="confirmPassword"
                      />
                      <i
                        className="bi bi-eye-slash confirmPasswordEye"
                        id="toggleConfirmPassword"
                      ></i>
                    </div>

                    <div className="mx-3 col-6">
                      <div className="my-1 mx-1">
                        <p className="faFeild">دسترسی ها :</p>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkAdmin"
                          name="isAdmin"
                          checked={values.isAdmin}
                          onChange={(event) => {
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            });
                          }}
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkAdmin"
                        >
                          مدیران
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkProduct"
                          name="isProduct"
                          checked={values.isProduct}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkProduct"
                        >
                          محصولات
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkCard"
                          name="isCard"
                          checked={values.isCard}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkCard"
                        >
                          کارت ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkEmail"
                          name="isEmail"
                          checked={values.isEmail}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkEmail"
                        >
                          ایمیل ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkReport"
                          name="isReport"
                          checked={values.isReport}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkReport"
                        >
                          گزارشات
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkTicket"
                          name="isTicket"
                          checked={values.isTicket}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkTicket"
                        >
                          تیکت ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkCategory"
                          name="isCategory"
                          checked={values.isCategory}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkCategory"
                        >
                          دسته بندی ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkUser"
                          name="isUser"
                          checked={values.isUser}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkUser"
                        >
                          کاربران
                        </label>
                      </div>
                      <div className="form-check form-switch float-end mt-1 mb-5 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkPayment"
                          name="isPayment"
                          checked={values.isPayment}
                          onChange={(event) =>
                            setValues({
                              ...values,
                              [event.target.name]: event.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkPayment"
                        >
                          پرداخت ها
                        </label>
                      </div>
                      <div className="mt-5 mx-5">
                        <div className="col-8 mt-5 mx-5">
                          <input
                            type="submit"
                            value="ثبت نام"
                            className="mt-3 btn btn-success w-100 faField"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAdmin;
