import axios from "axios";

export const getAdminServices = async (params) => {
  await axios
    .post("http://localhost:4000/adminPanel/admin/showAdmin", params)
    .then((res) => {
      return res?.data?.admin;
    });
};
