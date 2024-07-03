import axios from "axios";

export const getCategoriesServices = async () => {
  const cat = await axios.get(
    "http://localhost:4000/adminPanel/category/allCategories"
  );
  return cat?.data?.categories;
};

export const getCategoryAndCategoryProductsService = async (params) => {
  await axios
    .post("http://localhost:4000/adminPanel/category/category", params, {
      withCredentials: true,
    })
    .then((res) => {
      return {
        category: res?.data?.category,
        categoryProduct: res?.data?.categoryProduct,
      };
    });
};
