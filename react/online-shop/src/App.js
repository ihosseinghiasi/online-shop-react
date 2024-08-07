import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./authentication/register";
import SmsForm from "./authentication/smsForm";
import ConfirmSmsForm from "./authentication/confirmSmsForm";
import Login from "./authentication/login";
import AdminCounter from "./pages/adminPanel/counter.page";
import AddAdmin from "./pages/adminPanel/admin/addAdmin.page";
import AllAdmins from "./pages/adminPanel/admin/allAdmins.page";
import ShowAdmin from "./pages/adminPanel/admin/showAdmin.page";
import AddUser from "./pages/adminPanel/user/addUser.page";
import AllUsers from "./pages/adminPanel/user/allUsers.page";
import ShowUser from "./pages/adminPanel/user/showUser.page";
import AddCategory from "./adminPanel/category/addCategory";
import ShowCategory from "./adminPanel/category/showCategory";
import AllCategories from "./adminPanel/category/allCategories";
import AddProduct from "./adminPanel/product/addProduct";
import AllProducts from "./adminPanel/product/allProducts";
import ShowProduct from "./adminPanel/product/showProduct";
import AddCard from "./adminPanel/card/addCard";
import AllCards from "./adminPanel/card/allCards";
import ShowCard from "./adminPanel/card/showCard";
import Payment from "./pages/payment.page";
import Category from "./pages/category.page";
import AddTicket from "./adminPanel/ticket/addTicket";
import UserCounter from "./userPanel/counter";
import Profile from "./userPanel/profile/profile";
import HomePage from "./pages/home.page";
import MainLayoutComponent from "./components/layout/main-layout.component";
import AdminLayoutComponent from "./components/layout/adminPanel-layout.component";

const App = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayoutComponent>
                <HomePage />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/:category/:id"
            element={
              <MainLayoutComponent>
                <Category />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/payment/:id"
            element={
              <MainLayoutComponent>
                <Payment />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/admin/counter"
            element={
              <AdminLayoutComponent>
                <AdminCounter />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/newAdmin"
            element={
              <AdminLayoutComponent>
                <AddAdmin />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/allAdmins"
            element={
              <AdminLayoutComponent>
                <AllAdmins />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/showAdmin/:id"
            element={
              <AdminLayoutComponent>
                <ShowAdmin />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/newUser"
            element={
              <AdminLayoutComponent>
                <AddUser />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/allUsers"
            element={
              <AdminLayoutComponent>
                <AllUsers />
              </AdminLayoutComponent>
            }
          />
          <Route
            path="/admin/showUser/:id"
            element={
              <AdminLayoutComponent>
                <ShowUser />
              </AdminLayoutComponent>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/smsForm" element={<SmsForm />} />
          <Route path="/confirmSmsForm" element={<ConfirmSmsForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/newCategory" element={<AddCategory />} />
          <Route path="/admin/allCategories" element={<AllCategories />} />
          <Route path="/admin/showCategory/:id" element={<ShowCategory />} />
          <Route path="/admin/newProduct" element={<AddProduct />} />
          <Route path="/admin/allProducts" element={<AllProducts />} />
          <Route path="/admin/showProduct/:id" element={<ShowProduct />} />
          <Route path="/admin/newCard" element={<AddCard />} />
          <Route path="/admin/allCards" element={<AllCards />} />
          <Route path="/admin/showCard/:id" element={<ShowCard />} />
          <Route path="/admin/newTicket" element={<AddTicket />} />
          <Route path="/user/counter" element={<UserCounter />} />
          <Route path="/user/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
