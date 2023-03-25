import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBarList = ({ active, text, Icon }) => {
  // console.log(text);
  let link

  if (text === "Profile") {
    link ="me";
  } else {
    // link = text.toLowerCase();
    link = '#'
  }

  return (
    <div className={`sideBarList ${active && "sideBarList__Active"}`}>
        <Link to={`/${link}`}>
          <Icon />
          <h2>{text}</h2>
        </Link>
    </div>
  );
};

export default SideBarList;
