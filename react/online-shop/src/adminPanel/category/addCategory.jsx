import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../adminNavbar";
import RightMenu from "../rightMenu";
import "../../public/css/admin/category.css";
import "../../public/css/admin/general.css";
import defaultImage from "../../public/pictures/unimage.png";

const AddCategory = () => {
  const [namak, setNamak] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(defaultImage);
  const [UrlCategoryImage, setUrlCategoryImage] = useState(defaultImage);
  const [persianDate, setPersianDate] = useState("");
  const fileUploadRef = useRef(null);

  useEffect(() => {
    const getPersianDate = async () => {
      await axios.get("http://localhost:4000/persianDate").then((res) => {
        setPersianDate(res.data);
      });
    };
    getPersianDate();
  }, []);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    const uploadedFile = fileUploadRef.current.files[0];
    setCategoryImage(uploadedFile);
    const cachedUrl = URL.createObjectURL(uploadedFile);
    setUrlCategoryImage(cachedUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", categoryImage);
    formData.append("namak", namak);
    formData.append("title", title);
    formData.append("description", description);

    await axios
      .post("http://localhost:4000/adminPanel/category/addCategory", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.status);
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
                {/* <img src="/icons/plus-square-black.svg"  alt="افزودن دسته بندی "> */}
                <img src={"/uploads/icons/plus-square-black.svg"} alt="" />
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
                        className="form-control mt-3 enField"
                        placeholder="نامک دسته بندی"
                        onChange={(e) => setNamak(e.target.value)}
                      />
                      <span
                        className="badge bg-secondary nemeAddressBadge"
                        id="namak"
                      >
                        http://localhost/admin-cPanel/category/{namak}
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
                      <img
                        src={UrlCategoryImage}
                        alt="categoryImage"
                        className="imageUpload rounded-full"
                        onClick={handleImageUpload}
                      />

                      <input
                        type="file"
                        name="image"
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
                        id="categoryTitle"
                        placeholder="عنوان دسته بندی"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <div className="form-group mt-3">
                        <textarea
                          name="description"
                          id="editor"
                          className="form-control"
                          cols="30"
                          rows="10"
                          onChange={(e) => setDescription(e.target.value)}
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

export default AddCategory;
