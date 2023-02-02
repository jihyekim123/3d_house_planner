import {ReactComponentElement, useState, setState} from "react";
import styled, { css } from 'styled-components';
// import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from 'semantic-ui-react';

import house1 from '../Image/house1.jpg'
import house2 from '../Image/house2.png'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {Link} from 'react-router-dom'


function HotContent() {
    // const navigate = useNavigate();
    // const handleNavigate=()=>{navigate("/designer")}
    const content=[
        {'rank': 1, 'con': 'abc'},
        {'rank': 2, 'con': 'asd'},
        {'rank': 3, 'con': 'ewr'}
    ]
    return (
        <StyledHotDesignerWrap>
            <StyledTitle>
            HOT 게시글
            </StyledTitle>
            <StyledBox>
                <Link to='/modelPage'>
                <StyledDesigner className='designer'>
                    <StyledRanking>1</StyledRanking>
                    <StyledProfile/>
                    <StyledContent>Content A</StyledContent>
                </StyledDesigner>
                </Link>

                <StyledDesigner className='designer'>
                    <StyledRanking>2</StyledRanking>
                    <StyledProfile/>
                    <StyledContent>Content B</StyledContent>
                </StyledDesigner>
                <StyledDesigner className='designer'>
                    <StyledRanking>3</StyledRanking>
                    <StyledProfile/>
                    <StyledContent>Content C</StyledContent>
                </StyledDesigner>
                <a style={{color: '	#1e90ff'}}>
                    <div style={{padding: '20px 30px'}}>
                        <span>더 보기</span>
                    </div>
                </a>
            </StyledBox>

        </StyledHotDesignerWrap>
    )
}

export default HotContent


const StyledHotDesignerWrap=styled.div`
    // border: 1px solid black;
    border-radius: 10%;
    background-color: #eee;
    width: 100%;
    margin-bottom: 20px;
`

const StyledTitle=styled.div`
    padding: 20px;
    font-size: 1.2rem;
    text-align: center;
    // text-align: left;
    font-weight: bold;
    // float: left;
    
`

const StyledBox=styled.div`
    display: flex;
    flex-direction: column;
`

const StyledDesigner=styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 20px;
    // border-radius: 10%;

    &:hover {
        background-color: #dcdcdc;
        cursor: pointer;
    };


`

const StyledRanking=styled.div`
    padding: 5px;
    font-size: 0.8rem;
`

const StyledProfile=styled.img.attrs({
    src: `${house2}`
})`
    border-radius: 50%;
    // border: 1px solid black;
    width: 40px;
    height: 40px;
    margin: 10px;
    background-color: white;

    object-fit: cover;


`

const StyledContent=styled.div`
    padding: 10px;
    vertical-align: middle;
    // line-height: 60px;

`