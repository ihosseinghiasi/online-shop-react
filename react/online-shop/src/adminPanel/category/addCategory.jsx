import { useEffect, useState } from "react";
import "../../public/css/admin/category.css"
import "../../public/css/admin/general.css"
import AdminNavbar from "../adminNavbar";
import axios from "axios";
import RightMenu from "../rightMenu";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    return ( 
        <>
            <AdminNavbar />
             <div class="container-fluid">
             <div class="row">
             <RightMenu />   
             <div class="col-10">
                <div class="col-11 mx-5 counter">
                    <div class="titleCounter">
                        <p> پیشخوان / دسته بندی ها / افزودن دسته بندی </p>
                    </div>
                    <div class="d-flex justify-content-start parsianDate">
                       <p>parsianDate</p>
                    </div>
                </div>

                <div class="addAdmin col-11 my-5 mx-5">
                    <div class="addtitle my-3 mx-2 col-8">
                        {/* <img src="/icons/plus-square-black.svg"  alt="افزودن دسته بندی "> */}
                        <img src={'/uploads/icons/plus-square-black.svg'} alt="" />
                        افزودن دسته بندی
                    </div>
               
                    <div class="addBody col-8 mx-5">
                        <form action="/admin-cPanel/category/newCategory" enctype="multipart/form-data" method="post">
                          <div class="row">
                            <div class="col-8">
                                <input type="text" name="categoryName" id="categoryName" class="form-control mt-3 enField" placeholder="نامک دسته بندی" />
                                <span class="badge bg-secondary nemeAddressBadge" id="namak">http://localhost/admin-cPanel/category/</span>
                                <p class="mt-5 text-secondary">
                                    از نامک دسته بندی برای ساخت آدرس صفحه دسته بندی استفاده میشود .
                                </p>
                                <p class="text-secondary">
                                    این موضوع  با توجه به باکس رنگی بهتر نمایان میشود .
                                </p>
                            </div>
                            <div class="col-4 fileUloadArea">
                                <div class="imageUpload mx-auto" id="file" >
                                    {/* <img class="categoryImage" id="output"  > */}
                                    {/* <img src="" alt="" /> */}
                                </div>

                                <input type="file" name="image" class="form-control" onchange="loadFile(event)" hidden />
                                <input type="submit" id="submit" class="btn btn-success mt-2 btnSubmit" value="ذخیره دسته بندی" />
                            </div>
                            <div class="row mt-3">
                                <input type="text" name="title" class="form-control" id="categoryTitle" placeholder="عنوان دسته بندی" />
                                <div class="form-group mt-3">
                                    <textarea name="description" id="editor" class="form-control" cols="30" rows="10"></textarea>
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
}
 
export default AddCategory;