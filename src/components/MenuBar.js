import React, { useState } from "react";
import { IoIosPerson, IoIosBrush } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import MenuItem from "./common/MenuItem";

function MenuBar({ handlePageShow, selectedItem }) {
  return (
    <ul className="portfolio-navbar">
      <MenuItem
        selectedItem={selectedItem}
        handlePageShow={handlePageShow}
        icon={<IoIosPerson />}
        label="About"
      />

      <MenuItem
        selectedItem={selectedItem}
        handlePageShow={handlePageShow}
        icon={<AiFillProfile />}
        label="Resume"
      />

      <MenuItem
        selectedItem={selectedItem}
        handlePageShow={handlePageShow}
        icon={<IoIosBrush />}
        label="Works"
      />

      <MenuItem
        selectedItem={selectedItem}
        handlePageShow={handlePageShow}
        icon={<RiMessage2Fill />}
        label="Blogs"
      />
      <MenuItem
        selectedItem={selectedItem}
        handlePageShow={handlePageShow}
        icon={<MdContacts />}
        label="Contact"
      />
    </ul>
  );
}

export default MenuBar;
