import React, { useState } from "react";
import { IoIosPerson, IoIosBrush } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import MenuItem from "./common/MenuItem";

function MenuBar(props) {
  const [selected, setSelected] = useState("about");

  function handleSelected(value) {
    setSelected(value);
  }

  return (
    <ul className="portfolio-navbar">
      <MenuItem
        selected={selected}
        handleSelected={handleSelected}
        icon={<IoIosPerson />}
        label="About"
      />

      <MenuItem
        selected={selected}
        handleSelected={handleSelected}
        icon={<AiFillProfile />}
        label="Resume"
      />

      <MenuItem
        selected={selected}
        handleSelected={handleSelected}
        icon={<IoIosBrush />}
        label="Works"
      />

      <MenuItem
        selected={selected}
        handleSelected={handleSelected}
        icon={<RiMessage2Fill />}
        label="Blogs"
      />
      <MenuItem
        selected={selected}
        handleSelected={handleSelected}
        icon={<MdContacts />}
        label="Contact"
      />
    </ul>
  );
}

export default MenuBar;
