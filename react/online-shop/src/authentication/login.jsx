import { Link, useNavigate } from "react-router-dom";
import "../public/css/shop/login.css"
import { useEffect, useState } from "react";
import axios from "axios";

export const Login = () => {

    const [userType, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        setUserType(localStorage.getItem('userType'));
    }, []);

    useEffect(()=> {
        if(userType === "admin") {
            setEmail("expresscard.eshopping@gmail.com")
            setPassword("1024")
        }
    }, [userType])

     function userLogin(event) {
        let data = {
            email: email,
            password: password
        }
        event.preventDefault()
     axios.post('http://localhost:5000/authentication/adminLogin', data)
        navigate('/')
    }

    return (
        <>
            <div className="registerForm">
                <div className="register">
                    <h3>به اکسپرس کارت خوش آمدید .</h3>
                    <p>تا کنون ثبت نام نکرده اید ؟</p>
                    <Link to={""} className="btn btn-outline-success mt-2" role="button"> ثبت نام </Link>
                </div>
                <div className="loginForm">
                    <h2 className="mt-5">ورود به سایت</h2>
                    <form onSubmit={userLogin}>
                        <div className="mb-3 mt-5">
                            <input type="email" className="form-control mt-5" placeholder="ایمیل" name="email" value={email}
                                onChange={(event)=> setEmail(event.target.value)}
                            />
                            <input type="password" className="form-control mt-5" placeholder="کلمه عبور" name="password" value={password}
                                onChange={(event)=> setPassword(event.target.value)}
                            />
                        </div>
                        <div className="row">
                            <div className="d-grid gap-2 col-10 mx-auto float-end mt-3">
                                <button type="submit" className="btn btn-success">ورود به سایت</button>
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