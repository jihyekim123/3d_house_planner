/* eslint-disabled */
import './index.css';
import {Suspense, useRef} from 'react'
import * as THREE from "three";
import { Canvas, useLoader } from '@react-three/fiber'
import {Environment, OrbitControls, useGLTF, Html, useProgress} from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import SearchBar from '../Components/SearchBar'
import HotDesigner from '../Components/HotDesigner'
import HotContent from '../Components/HotContent'
import Section from '../Components/Section'
import Side from '../Components/Side'


// 3D 모델 로딩 코드 출처 https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models

function GLTFMODEL()  {
  // gltf또는 glb 모델을 로드
  const gltf = useLoader(GLTFLoader, "models/house2.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={3} />
    </>
  );
};

function OBJMODEL() {
  // obj 모델을 로드
  const mtl = useLoader(MTLLoader, "/models/house1.mtl")
  const obj = useLoader(OBJLoader, './models/house1.obj', (loader) => {
    mtl.preload();
    loader.setMaterials(mtl);
  })
  console.log(obj);
  return <primitive object={obj} scale={3} />;
}

function Loader() {
  // 로딩화면
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}



function ModelPage() {



    return (
      <div>
                            <Side/>

<StyledSearchBarWrap>
<SearchBar/>
<HotDesigner/>
<HotContent/>
</StyledSearchBarWrap>


        <div className="modelPage">
            <div className="modelPost">
                <div className="postInfo">
                    <div className="Title">2Floor Room</div>
                    <div className="uploadDate">2022-xx-xx | user1</div>
                    {/* <div className="user">user1</div> */}
                </div>


                <div className="canvas-container">
                  <Canvas>
                      <Suspense fallback={<Loader />}>
                      <ambientLight />
                      {/* <GLTFMODEL /> */}
                      <OrbitControls enablePan={true}  enableZoom={true} enableRotate={true}/>
                      <Environment preset="warehouse" background />
                      </Suspense>
                  </Canvas>
                </div>      
            </div>

            <div>

              <div className="productList">
                <div>
                  <div className="productInfo2">
                    상품
                  </div>
                  <div className="productInfo2">
                    가격
                  </div>
                  <div className="productInfo2">
                    브랜드
                  </div>
                </div>
                <br/>
                <div>
                  <div className="productInfo">
                    커튼
                  </div>
                  <div className="productInfo">
                    35,000
                  </div>
                  <div className="productInfo">
                    A사
                  </div>
                  <div>
                  <div className="productInfo">
                    소파
                  </div>
                  <div className="productInfo">
                    115,000
                  </div>
                  <div className="productInfo">
                    I사
                  </div>
                  </div>
                </div> 


              </div>
              

              <div className='buttonWrap'>
              <Link to="/home">
                    <button className="btn3">
                        메인페이지
                    </button>
                </Link>
                <Link to="/designPage1">
                    <button className="btn3">
                        도면 보기
                    </button>
                </Link>
              </div>

            </div>
        </div>

      </div>

    );
  }
  
  export default ModelPage;

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