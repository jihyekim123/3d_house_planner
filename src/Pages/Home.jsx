import React from 'react'
import './Pages.css'
import {BrowserRouter as Router , Route ,Routes, Link, Redirect,Outlet } from 'react-router-dom'
// import {useRouteMatch} from 'react-router-dom'
import styled, { css } from 'styled-components';

import SearchBar from '../Components/SearchBar'
import HotDesigner from '../Components/HotDesigner'
import HotContent from '../Components/HotContent'
import Section from '../Components/Section'
import Side from '../Components/Side'



import Model from '../Components/Model'
import Sample from '../Components/Sample'

function Home() {
    // let { url } = useRouteMatch();

    return (
        <div>
                    <Side/>

                    <StyledSearchBarWrap>
          <SearchBar/>
          <HotDesigner/>
          <HotContent/>
        </StyledSearchBarWrap>

        <StyledHome>
        <Section/>
        </StyledHome>
        </div>



    )
}

export default Home


const StyledHome=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
// color: blue;
`

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