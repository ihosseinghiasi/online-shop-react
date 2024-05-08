import React from "react";
import Home from "./main/home"
import Register from './authentication/register'
import CustomerNavbar from "./main/customerNavbar";
import SmsForm from "./authentication/smsForm";
import ConfirmSmsForm from "./authentication/confirmSmsForm";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return ( 
        <>
           <CustomerNavbar />
           <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/smsForm" element={<SmsForm />}/>
                <Route path="/confirmSmsForm" element={<ConfirmSmsForm />}/>
           </Routes>
        </>
    );
}
 
export default App;