import { useState, useEffect } from "react";
import mainImage from "../public/pictures/shopping01.jpg";
import "../public/css/shop/mainPage.css";
import Footer from "./footer";
import axios from "axios";

const Home = () => {

  const [categories, setCategories] = useState("")

  useEffect(()=> {
    axios.get('http://localhost:5858/admin-cPanel/category/showCategories').then((res)=> {
      setCategories(res.data)
    })
  }, [])


  return (
    <>
      <div className="container-flud">
        <div className="main">
          <img src={mainImage} className="mainImage" alt="mainImage" />
          <div className="custom-shape-divider-bottom-1694511368">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1100 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="shoppingPicure"></div>
          <div className="expressCard">
            <h1 className="expressH1">اکسپرس کارت :</h1>
            <p className="expressParagraph">
              چند مرحله ساده را بگذارید و محصول خود را دریافت کنید ، با اکسپرس
              کارت همه چیز آسان و در دسترس است.
            </p>
            <p className="expressParagraph">
              همچنین با اکپرس کارت میتوان در کمترین زمان ممکن و بهترین قیمت و
              بالاترین کیفیت بصورت لحظه ای خرید کنید و کد محصول را دریافت
              فرمایید.
            </p>
          </div>
        </div>
        <p className="pCategories">انتخاب دسته بندی</p>

        {
          Object.values(categories).forEach((categoriesList) => {
            categoriesList.map((category1) => (
             <h1> {category1.title} </h1>
            ))
          })
        }

      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
