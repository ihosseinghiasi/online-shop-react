import { useEffect, useState } from "react";
import AdminNavbar from "../adminNavbar";
import RightMenu from "../rightMenu";
import axios from "axios";

const AddCard = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState({});
  const [persianDate, setPersianDate] = useState("");
  const [productCard, setProductCard] = useState([]);
  const [fieldTitles, setFieldTitles] = useState([]);
  const [fieldValues, setFieldValues] = useState([]);

  useEffect(() => {
    getProductsOfSelectedCategorie();
  }, [card.categoryCard]);

  useEffect(() => {
    getfieldValuesOfProducts();
  }, [card.productCard]);

  const getProductsOfSelectedCategorie = () => {
    products.map((product) => {
      if (product.categoryTitle === card.categoryCard) {
        setProductCard((productCard) => [...productCard, product.title]);
      } else {
        setProductCard([]);
      }
    });
  };

  const getfieldValuesOfProducts = () => {
    setFieldTitles([]);
    products.map((product) => {
      if (product.title === card.productCard) {
        setFieldTitles((fieldTitles) => [...fieldTitles, product.fields]);
      }
    });
  };

  const handleChangeField = (onChangeFields, index) => {
    const newFields = [...fieldValues];
    newFields[index] = onChangeFields;
    setFieldValues(newFields);
  };

  useEffect(() => {
    const getPersianDate = async () => {
      await axios.get("http://localhost:4000/persianDate").then((res) => {
        setPersianDate(res.data);
      });
    };

    const getCategoriesAndProducts = async () => {
      await axios
        .get("http://localhost:4000/adminPanel/card/getCategoriesAndProducts")
        .then((res) => {
          setCategories(res.data.categories);
          setProducts(res.data.products);
        });
    };

    getPersianDate();
    getCategoriesAndProducts();
  }, []);

  const addCard = async (e) => {
    e.preventDefault();
    const data = {
      card,
      fieldTitles,
      fieldValues,
    };

    await axios
      .post("http://localhost:4000/adminPanel/card/addCard", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.status);
      });
  };
  return (
    <>
      <div className="container-fluid">
        <AdminNavbar />
        <div className="row">
          <RightMenu />
          <div className="col-10">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / کارت / افزودن کارت </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>

            <div className="addProduct col-11 my-5 mx-5" id="main">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="addCard"
                />
                افزودن کارت
              </div>
              <div className="col-8 mx-5 addBody">
                <form onSubmit={(e) => addCard(e)}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-7">
                        <label for="cardCategoryTitle">
                          انتخاب دسته بندی :
                        </label>
                        <p id="cardCategoryTitle" className="mt-2">
                          {" "}
                          برای آسانی در روند وارد سازی کارت ها لازم است در ابتدا
                          دسته بندی مورد نظر را انتخاب نمایید.{" "}
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="categoryCard"
                          id="cardCategory"
                          onChange={(e) =>
                            setCard({
                              ...card,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option> دسته بندی ها </option>
                          {categories.map((category, index) => (
                            <option> {category.title} </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardProductTitle">انتخاب محصول :</label>
                        <p id="cardProductTitle" className="mt-2">
                          {" "}
                          پس از انتخاب دسته بندی میبایست محصول مورد نظر را
                          انتخاب کنید تا ادامه مراحل برای شما نمایان شود.{" "}
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="productCard"
                          id="productCard"
                          onChange={(e) =>
                            setCard({
                              ...card,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option> محصولات </option>
                          {productCard.map((product, index) => (
                            <option> {product} </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardfieldsTitle"> اطلاعات کارت : </label>
                        <p id="cardfieldsTitle" className="mt-2">
                          {" "}
                          در این بخش میبایست اطلاعات کارت مورد نظر را بصورت تکی
                          و یا از طریق فایل آن ها را بصورت دسته جمعی وارد
                          نمایید.{" "}
                        </p>
                      </div>
                      <div className="col-5 my-3" id="formField">
                        {fieldTitles.map((allfieldTitles) =>
                          allfieldTitles.map((fieldTitle, index) => (
                            <input
                              key={index}
                              type="text"
                              className="form-control mt-1"
                              placeholder={fieldTitle}
                              onChange={(e) =>
                                handleChangeField(e.target.value, index)
                              }
                            />
                          ))
                        )}
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardStatusTitle"> وضعیت کارت : </label>
                        <p id="cardStatusTitle" className="mt-2">
                          {" "}
                          شما در این بخش میتوانید مشخص کنید که کارت های وارد شده
                          چه وضعیتی داشته باشند .{" "}
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="cardStatus"
                          id="cardStatus"
                          onChange={(e) =>
                            setCard({
                              ...card,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option> وضعیت کارت </option>
                          <option> فعال </option>
                          <option> غیر فعال </option>
                          <option> فروخته شده </option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-11 mt-3 mx-5">
                        <button type="submit" className="btn btn-success w-100">
                          {" "}
                          ذخیره کارت
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCard;
