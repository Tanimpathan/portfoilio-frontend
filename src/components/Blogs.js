import React from "react";

function Blogs({ selectedItem }) {
  return (
    <div
      id="Blogs"
      className={`blogs-section animate__animated ${
        selectedItem !== "Blogs"
          ? "hidden animate__fadeOutLeft"
          : "animate__fadeInLeft"
      } inner-card active-component`}
      // style={{ color: "white", height: "79vh", overflowY: "scroll" }}
    >
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
      <p>Hello World Hello World Hello World Hello World Hello World</p>
    </div>
  );
}

export default Blogs;
