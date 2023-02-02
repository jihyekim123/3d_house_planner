import {ReactComponentElement, useState, setState} from "react";
import styled, { css } from 'styled-components';
// import './SearchBar.css'

function SideSearchBar() {
    return (
        <StyledSearchBarWrap></StyledSearchBarWrap>

    )
}

export default SideSearchBar;


const StyledSearchBarWrap=styled.div`
    position: absolute;
    right: 0;
    padding: 20px;
    height: 100%;
`