import React from 'react'
import './Pages.css'
import styled, { css } from 'styled-components';

import SearchBar from '../Components/SearchBar'
import HotDesigner from '../Components/HotDesigner'
import HotContent from '../Components/HotContent'
import Section from '../Components/Section'
import Side from '../Components/Side'

function Community() {
    return (
        <div className = 'content'>
                                <Side/>

<StyledSearchBarWrap>
<SearchBar/>
<HotDesigner/>
<HotContent/>
</StyledSearchBarWrap>
            <h1>Home Page</h1>
        </div>
    )
}

export default Community


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