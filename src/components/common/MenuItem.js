import React from "react";

function MenuItem({ selected, handleSelected, icon, label }) {
  return (
    <li
      className={`cursor-pointer nav-item ${
        selected === label ? "text-pr-green " : ""
      }`}
      onClick={() => handleSelected(label)}
    >
      <div>
        <span className="d-flex flex-column align-items-center menu-item-icon ">
          <span className="mb-1">{icon}</span>
          <span className="menu-item-label">{label}</span>
        </span>
      </div>
    </li>
  );
}

export default MenuItem;
