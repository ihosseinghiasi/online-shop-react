import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./main/home"
import Category from "./main/category";
import Register from './authentication/register'
import SmsForm from "./authentication/smsForm";
import ConfirmSmsForm from "./authentication/confirmSmsForm";
import Login from "./authentication/login";
import AdminCounter from "./adminPanel/counter";
import AddAdmin from "./adminPanel/admin/addAdmin";
import AllAdmins from "./adminPanel/admin/allAdmins";
import ShowAdmin from "./adminPanel/admin/showAdmin";
import AddUser from "./adminPanel/user/addUser";
import AllUsers from "./adminPanel/user/allUsers";
import ShowUser from "./adminPanel/user/showUser";
import AddCategory from "./adminPanel/category/addCategory";
import Dashboard from "./authentication/dashboard";
import ShowCategory from "./adminPanel/category/showCategory"
import AllCategories from "./adminPanel/category/allCategories";
import AddProduct from "./adminPanel/product/addProduct";
import AllProducts from "./adminPanel/product/allProducts";
import ShowProduct from "./adminPanel/product/showProduct";
import AddCard from "./adminPanel/card/addCard";
import AllCards from "./adminPanel/card/allCards";
import ShowCard from "./adminPanel/card/showCard";

const App = () => {
    return ( 
        <>
           <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/smsForm" element={<SmsForm />}/>
                <Route path="/confirmSmsForm" element={<ConfirmSmsForm />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/:category/:id" element={<Category />} />
                <Route path="/admin/Counter" element={<AdminCounter />} />
                <Route path="/admin/newAdmin" element={<AddAdmin />} />
                <Route path="/admin/allAdmins" element={<AllAdmins />}/>
                <Route path="/admin/showAdmin/:id" element={<ShowAdmin />}/>
                <Route path="/admin/newUser" element={<AddUser />}/>
                <Route path="/admin/allUsers" element={<AllUsers />}/>
                <Route path="/admin/showUser/:id" element={<ShowUser />}/>
                <Route path="/admin/newCategory" element={<AddCategory />}/>
                <Route path="/admin/allCategories" element={<AllCategories />} />
                <Route path="/admin/showCategory/:id" element={<ShowCategory />} />
                <Route path="/admin/newProduct" element={<AddProduct />} />
                <Route path="/admin/allProducts" element={<AllProducts />} />
                <Route path="/admin/showProduct/:id" element={<ShowProduct />} />
                <Route path="/admin/newCard" element={<AddCard />} />
                <Route path="/admin/allCards" element={<AllCards />} />
                <Route path="/admin/showCard/:id" element={<ShowCard />} />
           </Routes>
        </>
    );
}
 
export default App;