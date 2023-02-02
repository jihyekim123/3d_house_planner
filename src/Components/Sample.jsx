import {ReactComponentElement, useState, setState} from "react";
import styled, { css } from 'styled-components';
// import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from 'semantic-ui-react';
import {BrowserRouter as Router , Route ,Routes, Link, Redirect} from 'react-router-dom'


import house1 from '../modelDesign/2FloorRoom.png'
import house2 from '../modelDesign/modernRoom.png'

function Sample() {
    return (
        <StyledGrid className='styledGrid'>
            {/* <StyledSample className='styledSample'> */}
            <Link to='/designPage1'>
            <StyledProfile1/>
            </Link>
            <Link to='/designPage2'>
            <StyledProfile2/>
            </Link>

            {/* </StyledSample> */}

        </StyledGrid>
    )
}

export default Sample

const StyledGrid=styled.div`
    display: grid;
    z-index: 10;
    // grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 20px;
    position: relative;
    max-width: 100%;
    wrap: nowrap;
`

const StyledSample=styled.div`
// display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`

const StyledProfile1=styled.img.attrs({
    src: `${house1}`
})`
    // height: 100px;
    // margin: 10px;
    background-color: white;

    object-fit: cover;
    border-radius: 10%;

    border: 1px black solid;
    position: relative;
    width: 100%;

    // src: ${house1};

`

const StyledProfile2=styled.img.attrs({
    src: `${house2}`
})`
    // height: 100px;
    // margin: 10px;
    background-color: white;

    object-fit: cover;

    border: 1px black solid;
    border-radius: 10%;

    position: relative;
    width: 100%;

    // src: ${house1};

`