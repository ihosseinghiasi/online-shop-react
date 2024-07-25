import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [controllerCode, setControllerCode] = useState(1);
  return (
    <div className={"sidebar-item"}>
      <div className="sidebar-title">
        <img src={item.icon} alt="counter" />
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
