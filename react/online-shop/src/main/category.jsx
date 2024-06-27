import Navbar from "./navbar";
import Dashboard from "../authentication/dashboard";
import Footer from "./footer";
import "../public/css/shop/categoryPage.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();
  const [categoryProducts, setCategoryProducts] = useState();
  const [cookies] = useCookies([]);
  const [navStatus, setNavStatus] = useState();

  const sendParam = async () => {
    await axios
      .post("http://localhost:4000/adminPanel/category/category", params, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.status);
        setCategory(res.data.category);
        setCategoryProducts(res.data.categoryProducts);
      });
  };

  useEffect(() => {
    sendParam();
  }, []);

  return (
    <>
      {/* {navStatus && (navStatus === "Navbar" ? <Navbar /> : <Dashboard />)} */}
      {category && (
        <div className="container-flud">
          <div className="imageFrame">
            <img
              src={"/uploads/pictures/digitalMarketing.jpg"}
              className="mainImage"
              alt="mainImage"
            />
            <div className="titleFrame">
              <h1>{category.title}</h1>
            </div>
          </div>
          <div className="description" id="description">
            {category.description}
          </div>

          <div className="productFrame">
            {categoryProducts.map((product) => (
              <>
                <Link to={`/payment/${product._id}`}>
                  <div
                    className="productItem"
                    style={{ pointerEvents: product.count === 0 && "none" }}
                  >
                    <img
                      src={require(`../images/category/${product.image}`)}
                      alt="productImage"
                    />
                    <p>{product.title}</p>
                    <p className="price">
                      <img src="/uploads/icons/dollar-sign.svg" alt="price" />
                      قیمت : {product.price} تومان{" "}
                    </p>
                    <span> افزودن به سبد </span>
                  </div>
                </Link>
              </>
            ))}
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Category;
