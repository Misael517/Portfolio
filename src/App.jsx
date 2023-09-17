import './App.css';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Preload } from '@react-three/drei';
import { ScaleLoader } from 'react-spinners';
import Ping2 from '/Audio/Ping2.mp3';

// Lazy Imports
const Nav = lazy(() => import('./components/Nav/Nav'))
const StackMemo = lazy(() => import('./pages/stack/Stack'));
const AboutMemo = lazy(() => import('./pages/about/About'));
const ContactMemo = lazy(() => import('./pages/contact/Contact'));
const ThreeElementsMemo = lazy(() => import('./components/ThreeElement/ThreeElements'));
const ThreeBackgroundMemo = lazy(() => import('./components/ThreeElement/ThreeBackground'));

const displayContent = [
  null,
  <StackMemo />,
  <AboutMemo />,
  <ContactMemo />,
]



// Project Component
export default function App() {
  const [content, setContent] = useState(0);


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
    <Suspense fallback={
      <div className='loading-spinner-container'>
        <ScaleLoader color="#00CEDD" />
      </div>
    }>

      <div className='scene1'>
        {/* Nav Component */}
        <header className='header'>
          <Suspense>
            <Nav setContent={setContent} />
          </Suspense>
        </header>


        {/* Main Body */}
        <main className='Main'>
          <Suspense>
            {displayContent[content]}
          </Suspense>
        </main>

        <Canvas shadows={true} >
          <Preload all />
          <ThreeElementsMemo />
        </Canvas>
      </div >


      <div className='scene2'>
        <Canvas shadows={true} >
          <Preload all />
          <ThreeBackgroundMemo />
        </Canvas>
      </div >
    </Suspense>
  )
}
