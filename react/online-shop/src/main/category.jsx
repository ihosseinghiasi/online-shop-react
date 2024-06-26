import Navbar from "./navbar";
import Footer from "./footer";
import "../public/css/shop/categoryPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();
  const [categoryProducts, setCategoryProducts] = useState();
  useEffect(() => {
    sendParam();
  }, []);

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

  return (
    <>
      <Navbar />
      {category && (
        <div class="container-flud">
          {/* <%if (userStatus === "user") { %>
    <%- include('../components/dashboardNavbar') -%>
<% } else { %>
    <%- include('../components/navbar') -%>
<% } %> */}

          <div class="imageFrame">
            <img
              src={"/uploads/pictures/digitalMarketing.jpg"}
              className="mainImage"
              alt="mainImage"
            />
            <div class="titleFrame">
              <h1>{category.title}</h1>
            </div>
          </div>
          <div class="description" id="description">
            {category.description}
          </div>

          <div class="productFrame">
            {/* <% Object.values(products).forEach( product => { %>
            <a href="/admin-cPanel/product/<%= product.productName %>/<%= product.id %>">
                <% if (product.count === 0) { %>
                    <div class="productItem" style="pointer-events: none;">
                <% } else { %>
                    <div class="productItem">
                        <% } %>
                    <img src="<%= product.image %>" alt="productImage">
                    <p><%= product.title %></p>
                    <p class="price">
                        <img src="/icons/dollar-sign.svg" alt="price">
                        قیمت : <%= product.price %> تومان </p>
                        <span> افزودن به سبد </span>
                </div>    
            </a>
        <% } ) %>
        </div> */}

            {categoryProducts.map((product) => (
              <>
                <div class="productItem">
                  <img
                    src={require(`../images/category/${product.image}`)}
                    alt="productImage"
                  />
                  <p>{product.title}</p>
                  <p class="price">
                    <img src="/uploads/icons/dollar-sign.svg" alt="price" />
                    قیمت : {product.price} تومان{" "}
                  </p>
                  <span> افزودن به سبد </span>
                </div>
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
