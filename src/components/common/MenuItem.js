import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function MenuItem({ handlePageShow, icon, label, selectedItem }) {
  return (
    <li style={{ borderBottom: "1px solid #e9e8e8" }}>
      <Link
        to={label}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handlePageShow(label)}
        className={`link ${selectedItem === label ? "active-menu-link" : ""}`}
      >
        <div className="menu-content-wrapper">
          <span className="mb-1 menu-item-icon">{icon}</span>
          <span className="menu-item-label">{label}</span>
        </div>
      </Link>
    </li>
  );
}

export default MenuItem;
