import React from "react";
import "./Sidenavmenubar.css";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { NavLink } from "react-router-dom";
function Sidenavmenubar() {
  return (
    <div className="side-nav">
      <input type="checkbox" id="menu" />
      <label className="icon" htmlFor="menu">
        <div className="menu"></div>
      </label>
      <nav>
        <ul>
          <NavLink
            to="/"
            activestyle={{ fontWeight: "bold", color: "blue" }}
          >
            <li>
              <HomeOutlinedIcon className="icons"></HomeOutlinedIcon>
              <div className="menu-text">Home</div>
            </li>
          </NavLink>
          <NavLink
            to="/search"
            activestyle={{ fontWeight: "bold", color: "blue" }}
          >
            <li>
              <SearchOutlinedIcon className="icons"></SearchOutlinedIcon>
              <div className="menu-text">About</div>
            </li>
          </NavLink>
          <NavLink
            to="/community"
            activestyle={{ fontWeight: "bold", color: "blue" }}
          >
            <li>
              <PeopleOutlineIcon className="icons"></PeopleOutlineIcon>
              <div className="menu-text">Careers</div>
            </li>
          </NavLink>
          <NavLink
            to="/newPage"
            activestyle={{ fontWeight: "bold", color: "blue" }}
          >
            <li>
              <PostAddIcon className="icons"></PostAddIcon>
              <div className="menu-text">Gallery</div>
            </li>
          </NavLink>
          <NavLink
            to="/more"
            activestyle={{ fontWeight: "bold", color: "blue" }}
          >
            <li>
              <MoreHorizOutlinedIcon className="icons"></MoreHorizOutlinedIcon>
              <div className="menu-text">Contact us</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenavmenubar;
