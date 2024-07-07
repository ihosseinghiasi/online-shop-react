import axios from "axios";

export const getCategoriesServices = async () => {
  const categories = await axios.get(
    "http://localhost:4000/adminPanel/category/allCategories"
  );
  return categories?.data?.categories;
};

export const getCategoryAndCategoryProductsService = async (params) => {
  await axios
    .post("http://localhost:4000/adminPanel/category/category", params, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data.category);
      return { category: res?.data?.category };
    });
};
