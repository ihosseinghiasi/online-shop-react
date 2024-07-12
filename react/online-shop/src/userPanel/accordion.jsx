import "../css/user/accordion.css";
import { useEffect, useRef, useState } from "react";
import SubItem from "./subItem";
const Accordion = ({ faq, onToggle, active }) => {
  const { title, icon } = faq;
  const { sub1, sub2 } = faq;
  const contentEl = useRef();

  return (
    <div className={`accordion_item ${active ? "active" : ""}`}>
      <div role="button" className="button" onClick={onToggle}>
        <p>
          {" "}
          <img src={icon} className="ms-1" alt="" /> {title}{" "}
        </p>
      </div>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
          <SubItem firstItem={sub1} secondItem={sub2} faq={faq} />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
