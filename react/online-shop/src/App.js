import React from "react";
import Home from "./main/home"
import Register from './authentication/register'
import SmsForm from "./authentication/smsForm";
import ConfirmSmsForm from "./authentication/confirmSmsForm";
import Login from "./authentication/login";
import { Route, Routes } from "react-router-dom";
import AdminCounter from "./adminPanel/counter";
import AddAdmin from "./adminPanel/addAdmin";
import AllAdmins from "./adminPanel/allAdmins";
import ShowAdmin from "./adminPanel/showAdmin";

const App = () => {
    return ( 
        <>
           <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/smsForm" element={<SmsForm />}/>
                <Route path="/confirmSmsForm" element={<ConfirmSmsForm />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/admin/Counter" element={<AdminCounter />} />
                <Route path="/admin/newAdmin" element={<AddAdmin />} />
                <Route path="/admin/allAdmins" element={<AllAdmins />} />
                <Route path="/admin/showAdmin/:id" element={<ShowAdmin />} />
           </Routes>
        </>
    );
}
 
export default App;