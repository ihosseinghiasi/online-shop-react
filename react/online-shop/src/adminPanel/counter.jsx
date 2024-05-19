// import "../public/css/admin/accordion.css"
import AdminNavbar from "./adminNavbar";
import RightMenu from "./rightMenu";
const AdminCounter = () => {
    return ( 
        <>
           <AdminNavbar />

           <div class="container-fluid">
           <div class="row ">
            <RightMenu />
            <div class="col-10">
                <div class="col-11 mx-5 counter">
                    <div class="titleCounter">
                        <p>پیشخوان</p>
                    </div>
                    <div class="d-flex justify-content-start parsianDate">
                       <p>djhdkhfkhdkhf</p>
                    </div>
                </div>
            <h1>admin counter</h1>
                </div>
            </div>
            </div>
        </>
     )
}
 
export default AdminCounter;