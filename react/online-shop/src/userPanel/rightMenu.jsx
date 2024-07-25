// import "../css/admin/general.css";
// import "../css/admin/accordion.css";
// import { Link } from "react-router-dom";
// import Accordion from "./accordion";
// import { faqs } from "../components/layout/adminSidebar/data/sidebarItems";
import { useState } from "react";

const RightMenu = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <>
      <div className="col-2 sideMenu text-light">
        <div className="row row-cols-1">
          <div className="picureLogo">
            <img
              src={"/uploads/pictures/menProfile.svg"}
              alt="profile"
              className="profileLogo"
            />
          </div>
          <div role="button" className="noAccordion">
            <p>
              {" "}
              <img
                src={"/uploads/icons/home.svg"}
                className="me-1 ms-1"
                alt=""
              />{" "}
              پیشخوان{" "}
            </p>
          </div>

          <ul className="accordion">
            {/* {faqs.map((faq, index) => (
              <Accordion
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                faq={faq}
              />
            ))} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
