import axios from "axios";

const getProductServices = async (params) => {
  await axios
    .post("http://localhost:4000/adminPanel/product/product", params, {
      withCredentials: true,
    })
    .then((res) => {});
};
