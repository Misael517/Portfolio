import './App.css';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import ProjectsArrayMemo from './components/ThreeElement/ThreeList';
import ThreeBackgroundMemo from './components/ThreeElement/ThreeBackground'
import { Preload, Stats } from '@react-three/drei';
import Ping2 from '/Audio/Ping2.mp3';
import { ScaleLoader } from 'react-spinners';

// Lazy Imports
const Nav = lazy(() => import('./components/Nav/Nav'))
const StackMemo = lazy(() => import('./pages/stack/Stack'));
const AboutMemo = lazy(() => import('./pages/about/About'));
const ContactMemo = lazy(() => import('./pages/contact/Contact'));
const ThreeElementsMemo = lazy(() => import('./components/ThreeElement/ThreeElements'));

const displayContent = [
  ' ',
  <StackMemo />,
  <AboutMemo />,
  <ContactMemo />,
]



// Project Component
export default function App() {
  const [content, setContent] = useState(0);
  const [displayNav, setDisplayNav] = useState('none')



  useEffect(() => {

    setTimeout(() => {
      setDisplayNav('flex')
    }, [1000])
  }, [])



  useEffect(() => {
    const audio2 = new Audio(Ping2)
    audio2.play();

    audio2.volume = 0.05;

    return () => {
      audio2.pause();
      audio2.currentTime = 0;
    };

  }, [content]);



  return (
    <>
      <div className='scene1'>
        {/* Nav Component */}
        <header className='header'>
          <Nav setContent={setContent} />
        </header>

        {/* Main Body */}
        <main className='Main'>
          <Suspense>
            {displayContent[content]}
          </Suspense>
        </main>

        <Canvas shadows={true} >
          <Preload all />
          <Stats />
          <ThreeElementsMemo />
        </Canvas>
      </div >


      <div className='scene2'>
        <Canvas shadows={true} >
          <Preload all />
          <ThreeBackgroundMemo />
        </Canvas>
      </div >
    </>
  )
}
