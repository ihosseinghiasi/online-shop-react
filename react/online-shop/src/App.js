import React from "react";
import Home from "./main/home"
import CustomerNavbar from "./main/customerNavbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return ( 
        <>
           <CustomerNavbar />
           <Routes>
                <Route path="/" element={<Home />}/>
           </Routes>
        </>
    );
}
 
export default App;