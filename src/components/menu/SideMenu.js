import React from "react";
import { Link } from "react-router-dom";
import "./sidemenu.scss";

const items = [
  { name: "Parse Curl", id: "/parser" },
  { name: "Curl Requests", id: "/curl" },
];
const SideMenu = () => {
  const [active, setActive] = React.useState(items[0].id);

  return (
    <>
      <nav className="side-nav">
        <ul>
          {items.map((item) => (
            <li
              className={active === item.id ? "active" : ""}
              onClick={() => setActive(item.id)}
            >
              <Link to={item.id}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideMenu;
