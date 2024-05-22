import { useEffect, useState } from "react";
import "../public/css/admin/admin.css"
import "../public/css/admin/general.css"
import AdminNavbar from "./adminNavbar";
import RightMenu from "./rightMenu";
import axios from "axios"
import TableRow from "./tableRow";

const AllAdmins = () => {
    const [ admins, setAdmins ] = useState([])
    useEffect(() => {
            const getAllAdmins = () => {
                axios.get('http://localhost:4000/adminPanel/admin/allAdmins').then((res => {
                setAdmins(res.data.admins)
            }))
            }
            getAllAdmins()
    }, [])
    return ( 
        <>
            <AdminNavbar />
            <div className="container-fluid">
            <div className="row">
                <RightMenu />
                <div className="col-10">
                    <div className="col-11 mx-5 counter">
                        <div className="titleCounter faField">
                            <p>پیشخوان  /  مدیران سایت  </p>
                        </div>
                        <div className="d-flex justify-content-start parsianDate">
                        </div>
                    </div>
    
                    <div className="addAdmin col-11 my-5 mx-5">
                        <div className="addtitle my-3 mx-2 col-8 faField">
                             <img src={"/uploads/icons/users-black.svg"} alt="admins" />   
                            مدیران سایت
                        </div>
                        
                        <div className="my-3 position-absolute col-8">
                            <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                                <thead>
                                  <tr>
                                    <th className="col-1" scope="col">#</th>
                                    <th className="col-3" scope="col">نام خانوادگی</th>
                                    <th className="col-3" scope="col">ایمیل</th>
                                    <th className="col-2" scope="col">دپارتمان</th>
                                    <th className="col-3" scope="col">عملیات</th>
                                  </tr>
                                </thead>
                                <tbody>
                                { admins.map((admin, index) => (
                                    <TableRow 
                                        index={index + 1 } id={admin._id} lastName={admin.lastName} 
                                        email={admin.email} department={admin.department}
                                    />
                                ) ) }       
                                </tbody>
                              </table>
                        </div>      
                    </div>
               </div>
            </div>
         </div>
        </>
     );
}
 
export default AllAdmins;