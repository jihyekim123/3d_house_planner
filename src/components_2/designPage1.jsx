import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import image from '../modelDesign/2FloorRoom.png'
import styled, { css } from 'styled-components';

import SearchBar from '../Components/SearchBar'
import HotDesigner from '../Components/HotDesigner'
import HotContent from '../Components/HotContent'
import Section from '../Components/Section'
import Side from '../Components/Side'

function LandingPage(props) {

    return (
        <div>
                                        <Side/>

<StyledSearchBarWrap>
<SearchBar/>
<HotDesigner/>
<HotContent/>
</StyledSearchBarWrap>
        <div className="modelPage2">   
            <div className="designImage">
                <img className="design" alt="도안 미생성" src={image}></img>

            </div>

            <div className='buttonWrap'>
                 {/* <button className="btn" onClick={onCreate}>
                    json 파일
                </button> */}
                <Link to="/home">
                    <button className="btn2">
                        메인 페이지
                    </button>
                </Link>
                <Link to="/modelPage">
                    <button className="btn2">
                        모델링 보기
                    </button>
                </Link>

            </div>






        </div>

        </div>
    );


}
export default LandingPage;


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