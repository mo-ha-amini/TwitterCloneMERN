import React from "react";
import { AiTwotoneHome } from "@react-icons/all-files/ai/AiTwotoneHome";
import { HiOutlineHashtag } from "@react-icons/all-files/hi/HiOutlineHashtag";
import { IoMdNotificationsOutline } from "@react-icons/all-files/io/IoMdNotificationsOutline";
import { BiMessageSquareDetail } from "@react-icons/all-files/bi/BiMessageSquareDetail";
import { BsBookmark } from "@react-icons/all-files/bs/BsBookmark";
import { BsCardList } from "@react-icons/all-files/bs/BsCardList";
import { CgMoreO } from "@react-icons/all-files/cg/CgMoreO";
import { logoutUser } from "../actions/user.action";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import SideBarList from "./SideBarList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      <SideBarList active text="Home" Icon={AiTwotoneHome} />
      <SideBarList text="Profile" Icon={CgProfile} />
      <SideBarList text="Explore" Icon={HiOutlineHashtag} />
      <SideBarList text="Notifications" Icon={IoMdNotificationsOutline} />
      <SideBarList text="Messages" Icon={BiMessageSquareDetail} />
      <SideBarList text="Bookmarks" Icon={BsBookmark} />
      <SideBarList text="Lists" Icon={BsCardList} />
      {/* <SideBarList text="More" Icon={CgMoreO} /> */}
      <SideBarList text="Logout" Icon={BiLogOut} onClick={logoutHandler} />
    </>
  );
}

export default Menu;
