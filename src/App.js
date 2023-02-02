import styled, { css } from 'styled-components';
// import Login from './components_2/Login';
// import MenuButton from './components/MenuButton';
// import MenuBar from './components/MenuBar';

import React from 'react'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Community from './Pages/Community'
import NewPage from './Pages/NewPage'
import More from './Pages/More' 
import Sidenavmenubar from './Components/Sidenavmenubar'
import SideSearchBar from './Components/SideSearchBar'
import Side from './Components/Side'

import SearchBar from './Components/SearchBar'
import HotDesigner from './Components/HotDesigner'
import HotContent from './Components/HotContent'
import Section from './Components/Section'
// import MultilevelSidebar from './Components/MultilevelSidebar'

import Model from './Components/Model'
import Sample from './Components/Sample'
// import Content from './Components/Content'


import LandingPage from './components_2/landingPage';
import DesignPage1 from './components_2/designPage1';
import DesignPage2 from './components_2/designPage2';
import ModelPage from './components_2/modelPage';
import Login from './components_2/login';
import Register from './components_2/register';



import {BrowserRouter as Router , Route ,Routes, Link, Redirect, Outlet } from 'react-router-dom'


function App() {

  // function Routes() {
  //   let isAuthorized = sessionStorage.getItem("isAuthorized");
  // }

  return (
    <div>
        <Router>

        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/modelPage' element={<ModelPage />} />
          <Route path='/designPage1' element={<DesignPage1 />} />
          <Route path='/designPage2' element={<DesignPage2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* <Route path='/content1' element={<Content />} /> */}


          <Route path = '/home' element = {<Home/>}>
            <Route path="list" element={<Section/>}/>
            <Route path="like" element={<Section/>}/>
            <Route path="scrap" element={<Section/>}/>
            <Route path="recentList" element={<Section/>}/>
          </Route>
          <Route path = '/search' element = {<Search/>}></Route>
          <Route path = '/community' element = {<Community/>} />
          <Route path = '/newPage' element = {<ModelPage/>} />
          <Route path = '/another' element = {<More/>} />
          <Route path = '/' element = {<More/>} />
          <Route element = {<Home/>}/>


        </Routes>
        </Router>

        {/* <Section>
        </Section> */}
        {/* <Model/> */}

        {/* <StyledSearchBarWrap>
          <SearchBar/>
          <HotDesigner/>
          <HotContent/>
        </StyledSearchBarWrap> */}

    </div>











  )
}

export default App

const StyledSearchBarWrap=styled.div`
    display: flex;
    flex-direction: column;
    // align-items:center; 

    position: fixed;
    right: 0;
    padding: 40px;
    // padding-bottom: 80px;

    // height: 100%;
    max-width: 300px;

    top: 20%;
    transform: translateY(-20%);
`

const Wrap=styled.div`
  direction: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`