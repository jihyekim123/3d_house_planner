import {ReactComponentElement, useState, setState} from "react";
import styled, { css } from 'styled-components';
// import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Sample from './Sample'


function Section() {
    return (
        <StyledSection>

            <Sample/>

        </StyledSection>
    )
}

export default Section

const StyledSection=styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    width: 1000px;
    background-color: #eee;
    padding: 50px;
    height: 100%;
    margin: 50px 0;

    justify-content: center;
    align-items: center;
`

