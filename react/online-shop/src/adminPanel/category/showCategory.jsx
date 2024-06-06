import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AdminNavbar from "../adminNavbar";
import RightMenu from "../rightMenu";
import axios from "axios";

const ShowCategory = () => {
  const params = useParams();
  const [persianDate, setPersianDate] = useState("");
  const [category, setCategory] = useState({});
  const [UrlCategoryImage, setUrlCategoryImage] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const fileUploadRef = useRef(null);

  const getCategory = async () => {
    await axios
      .post("http://localhost:4000/adminPanel/category/showCategory", params)
      .then((response) => {
        setCategory(response.data.category);
      });
  };

  useEffect(() => {
    const getPersianDate = async () => {
      await axios.get("http://localhost:4000/persianDate").then((res) => {
        setPersianDate(res.data);
      });
    };

    getPersianDate();
    if (params) getCategory();
  }, []);

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    setCategoryImage(uploadedFile);
    setUrlCategoryImage(URL.createObjectURL(uploadedFile));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (categoryImage) formData.append("file", categoryImage);
    formData.append("id", category._id);
    formData.append("categoryName", category.categoryName);
    formData.append("title", category.title);
    formData.append("description", category.description);
    formData.append("image", category.image);

    await axios
      .post(
        "http://localhost:4000/adminPanel/category/updateCategory",
        formData
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <RightMenu />
          <div className="col-10">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / دسته بندی ها / افزودن دسته بندی </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="category"
                />
                افزودن دسته بندی
              </div>

              <div className="addBody col-8 mx-5">
                <form
                  id="form"
                  enctype="multipart/form-data"
                  onSubmit={(e) => submitHandler(e)}
                >
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="text"
                        name="categoryName"
                        id="categoryName"
                        value={category.categoryName}
                        className="form-control mt-3 enField"
                        placeholder="نامک دسته بندی"
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <span
                        className="badge bg-secondary nemeAddressBadge"
                        id="namak"
                      >
                        http://localhost/admin-cPanel/category/
                        {category.categoryName}
                      </span>
                      <p className="mt-5 text-secondary">
                        از نامک دسته بندی برای ساخت آدرس صفحه دسته بندی استفاده
                        میشود .
                      </p>
                      <p className="text-secondary">
                        این موضوع با توجه به باکس رنگی بهتر نمایان میشود .
                      </p>
                    </div>
                    <div className="col-4 fileUloadArea">
                      {category.image &&
                        (UrlCategoryImage ? (
                          <img
                            src={UrlCategoryImage}
                            name="newCategoryImage"
                            id="newCategoryImage"
                            alt="categoryImage"
                            className="imageUpload rounded-full"
                            onClick={handleImageUpload}
                          />
                        ) : (
                          <img
                            src={require(`../../images/category/${category.image}`)}
                            name="categoryImage"
                            id="categoryImage"
                            alt="categoryImage"
                            className="imageUpload rounded-full"
                            onClick={handleImageUpload}
                          />
                        ))}

                      <input
                        type="file"
                        name="file"
                        id="file"
                        ref={fileUploadRef}
                        className="form-control"
                        onChange={uploadImageDisplay}
                        hidden
                      />
                      <input
                        type="submit"
                        id="submit"
                        className="btn btn-success mt-2 btnSubmit"
                        value="ذخیره دسته بندی"
                      />
                    </div>
                    <div className="row mt-3">
                      <input
                        type="text"
                        name="title"
                        className="form-control faField"
                        value={category.title}
                        id="categoryTitle"
                        placeholder="عنوان دسته بندی"
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <div className="form-group mt-3">
                        <textarea
                          name="description"
                          id="editor"
                          value={category.description}
                          className="form-control"
                          cols="30"
                          rows="10"
                          onChange={(e) =>
                            setCategory({
                              ...category,
                              [e.target.name]: e.target.value,
                            })
                          }
                        ></textarea>
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

export default ShowCategory;
