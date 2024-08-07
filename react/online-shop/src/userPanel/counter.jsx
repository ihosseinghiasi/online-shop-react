import { useEffect, useState } from "react";
import axios from "axios";

const UserCounter = () => {
  const [persianDate, setPersianDate] = useState("");

  useEffect(() => {
    const getPersianDate = async () => {
      await axios.get("http://localhost:4000/persianDate").then((res) => {
        setPersianDate(res.data);
      });
    };
    getPersianDate();
  }, []);
  return (
    <>

      <div class="container-fluid">
        <div class="row ">
          <div class="col-10">
            <div class="col-11 mx-5 counter">
              <div class="titleCounter">
                <p>پیشخوان</p>
              </div>
              <div class="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>
            <h1>admin counter</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCounter;
