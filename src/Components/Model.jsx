/* eslint-disabled */
import './index.css';
import {Suspense, useRef} from 'react'
import * as THREE from "three";
import { Canvas, useLoader } from '@react-three/fiber'
import {Environment, OrbitControls, useGLTF, Html, useProgress} from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import * from '../../public/models/house2.glb'

// 3D https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models

function GLTFMODEL()  {
  // gltf
  const gltf = useLoader(GLTFLoader, '../../public/models/house2.glb');
  return (
    <>
      <primitive object={gltf.scene} scale={3} />
    </>
  );
};

function OBJMODEL() {
  const mtl = useLoader(MTLLoader, "../../public/models/house1.mtl")
  const obj = useLoader(OBJLoader, '', (loader) => {
    mtl.preload();
    loader.setMaterials(mtl);
  })
  console.log(obj);
  return <primitive object={obj} scale={3} />;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


function Model() {
    return (
        <div className="canvas-container">
            <Canvas>
            <Suspense fallback={<Loader />}>
                <ambientLight />
                <GLTFMODEL />
                <OrbitControls enablePan={true}  enableZoom={true} enableRotate={true}/>
                <Environment preset="warehouse" background />
            </Suspense>
            </Canvas>
        </div>   
    )
    
}

export default Model;
