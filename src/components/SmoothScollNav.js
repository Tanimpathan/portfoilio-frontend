import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function SmoothScollNav(props) {
  console.log(props.handlePageShow);
  return (
    <div>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="Blogs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => props.handlePageShow("Blogs")}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => props.handlePageShow("About")}
          >
            About
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default SmoothScollNav;
