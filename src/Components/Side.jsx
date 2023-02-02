import React, { useEffect, useState } from "react";
import "./Sidenavmenubar.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { Navigation } from "react-minimal-side-navigation";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { NavLink, useNavigate, useLocation } from "react-router-dom";


function Side() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="side-nav">
      <input type="checkbox" id="menu" />
      <label className="icon" htmlFor="menu">
        <div className="menu"></div>
      </label>
        <Navigation
            style={{
                width: isSidebarOpen ? '200px' : '60px'
            }}
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
                navigate(itemId);
                setIsSidebarOpen(true);
            }}
            items={[
            {
                title: "홈",
                itemId: "/home",
                elemBefore: () => <HomeIcon name="" />,
                subNav: [
                {
                    title: "목록",
                    itemId: "/home/list",
                    // Optional
                    elemBefore: () => <ListAltIcon name="cloud-snow" />
                },
                {
                    title: "좋아요",
                    itemId: "/home/like",
                    elemBefore: () => <FavoriteIcon name="coffee" />
                },
                {
                    title: "스크랩",
                    itemId: "/home/scrap",
                    elemBefore: () => <BookmarkIcon name="coffee" />
                },
                {
                    title: "최근 항목",
                    itemId: "/home/recentList",
                    elemBefore: () => <VisibilityIcon name="coffee" />
                }
                ]
            },
            {
                title: "검색하기",
                itemId: "/search",
                elemBefore: () => <SearchIcon name="user" />,

            },
            {
                title: "커뮤니티",
                itemId: "/community",
                elemBefore: () => <PeopleIcon name="user" />,
                // subNav: [
                // {
                //     title: "Teams",
                //     itemId: "/another/teams",
                //     elemBefore: () => <HomeIcon name="calendar" />
                // }
                // ]
            },
            {
                title: "페이지 생성",
                itemId: "/newPage",
                elemBefore: () => <PostAddIcon name="user" />,
                // subNav: [
                // {
                //     title: "Teams",
                //     itemId: "/another/teams",
                //     elemBefore: () => <HomeIcon name="calendar" />
                // }
                // ]
            },
            {
                title: "더보기",
                itemId: "/another",
                elemBefore: () => <MoreHorizOutlinedIcon name="user" />,
                // subNav: [
                // {
                //     title: "Teams",
                //     itemId: "/another/teams",
                //     elemBefore: () => <HomeIcon name="calendar" />
                // }
                // ]
            }
            ]}
        />
    </div>
  );
}


export default Side;








