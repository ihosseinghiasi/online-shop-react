import { Link, useNavigate } from "react-router-dom";
import '../public/css/shop/navbar.css'
import { useCookies } from "react-cookie";

const Dashboard = ( {fullName} ) => {

    const [cookies, setCookie, removeCookie] = useCookies([])
    const navigate = useNavigate()

    const logOut = () => {
      removeCookie('comercial')
      navigate('/')
    }

  return ( 
        <>
            <nav className="navbar navbar-expand-sm sticky-top navColor" dir='rtl'>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav me-5">
          <li className="nav-item mx-2 my-3">
            <Link className="nav-link linkColor" to="/">صفحه اصلی</Link>
          </li>
          <li className="nav-item dropdown mx-2 my-3" dir="rtl">
            <Link className="nav-link dropdown-toggle linkColor" role="button"
             data-bs-toggle="dropdown" href="#">دسته بندی ها  </Link>
            <ul className="dropdown-menu dropdownMenu">
              <li><Link></Link></li>
              </ul>
          </li>
         
        </ul>

        <ul className="navbar-nav me-auto me-5">
             <li className="nav-item ms-3">
                <Link className="nav-link text-info navUser" to="/">{ fullName }</Link>
            </li>
            <li className="nav-item ms-3">
                <Link to="" onClick={logOut} className="nav-link linkColor">
                     خروج
                </Link>
            </li>
            <li className="nav-item ms-5">
                <button className="callButton">
                    <a href="/" className="nav-link linkCallToMe text-light">تماس با ما</a>
                </button>
            </li>
        </ul>
     </div>
    </div>
   </nav>

        </>
     );
    }
 
    export default Dashboard;