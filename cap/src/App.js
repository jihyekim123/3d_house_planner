/* eslint-disabled */
import './index.css';
// import {Suspense, useRef} from 'react'
// import * as THREE from "three";
// import { Canvas, useLoader } from '@react-three/fiber'
// import {Environment, OrbitControls, useGLTF, Html, useProgress} from '@react-three/drei'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import DesignPage from './components/designPage';
import ModelPage from './components/modelPage';
import Login from './components/loginPage/login';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/modelPage' element={<ModelPage />} />
        <Route path='/designPage' element={<DesignPage />} />
        <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

// new commit