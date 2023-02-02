import {ReactComponentElement, useState, setState} from "react";
import styled, { css } from 'styled-components';
// import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from 'semantic-ui-react';

function SearchBar() {
  const [searchTerm, setSearchTerm]=useState("");

  const onSearchHandler=(e)=>{
    setSearchTerm(e.target.value);
  };

  return (
      <StyledSearchBar>
        <StyledPrompt
                  value={searchTerm}
                  onChange={onSearchHandler}
                  className="prompt"
                  type="text"
                  placeholder="검색"
                  />
        {/* <SearchIcon className='search'/> */}
      </StyledSearchBar>
  );
};

export default SearchBar;


// const StyledSearchBarWrap=styled.div`
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     right: 0;
//     padding: 20px;
//     height: 100%;

// `

const StyledSearchBar=styled.div`
  font-size: 1em;
  display: flex;
  position: relaitve;
  font-weight: 400;
  font-style: normal;
  flex-direction: inline-flex;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: inherit;

  margin-bottom: 20px;
  width: 300px;
`

const StyledPrompt=styled.input`
  margin: 0;
  max-width: 100%;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  line-height: 1em;
  padding: 0.6em 1em;
  border-radius: 500rem;
  text-align: left;
  border: 1px solid rgba(34,36,38,.15);

  .search {
    pointer-events: none;
    cursor: pointer;
  
    position: relative;
    line-height: 1;
    text-align: center;
    margin: 0;
    height: 100%;
    width: 10px;
    opacity: 0.5;
    border-radius: 0 0.2rem;
    transition: opacity 0.3s ease;
  }


`

const s=styled.i`
  pointer-events: none;
  cursor: pointer;

  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0;
  right: 0;
  margin: 0;
  height: 100%;
  width: 10px;
  opacity: 0.5;
  border0radius: 0 0.2rem;
  transition: opacity 0.3s ease;

  &:before {
    
  }
`