import '../public/css/shop/register.css'

const Register = () => {
    return ( 
       <>
            <div className="registerForm">
                <div className="loginPicture"></div>
                <div className="loginForm">
                 <h2>ثبت نام</h2>
                <form action="">
                    <div className="mb-3">
                        <input type="text" className="form-control mt-3"  placeholder="نام" name="firstName"/>
                        <input type="text" className="form-control mt-3"  placeholder="نام خانوادگی" name="lastName"/>
                        <input type="email" className="form-control mt-3"  placeholder="ایمیل" name="email"/>
                        <input type="password" className="form-control mt-3"  placeholder="کلمه عبور" name="password"/>
                        <input type="password" className="form-control mt-3"  placeholder="تکرار کلمه عبور" name=""/>
                        <input type="text" className="form-control invisible" name="phone" value="<%=phoneNumber%>"/>
                    </div>
                    <div className="row">
                        <div className="d-grid gap-2 col-10 mx-auto float-end">
                            <button type="submit" className="btn btn-success">ثبت نام</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="d-grid gap-2 col-4 mx-auto float-end mt-3">
                        <a href="/">بازگشت به صفحه اصلی</a>
                    </div>    
                </div>
            </div>
        </div>
       </>
     );
}
 
export default Register;