import './App.css';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense, useState, useEffect, } from 'react';
import { Stats, AdaptiveDpr, Preload } from '@react-three/drei';
import Ping2 from '/Audio/Ping2.mp3';
import Nav from './components/Nav/Nav'
import { ScaleLoader } from 'react-spinners';

// Lazy Imports
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


  useEffect(() => {
    const audio2 = new Audio(Ping2)
    audio2.play();

    audio2.volume = 0.2;

    return () => {
      audio2.pause();
      audio2.currentTime = 0;
    };

  }, [content]);


  return (
    <div className='scene'>
      {/* Nav Component */}
      <Suspense fallback={
        <div className='loading-spinner-container'>
          <ScaleLoader color="#00CEDD" />
        </div>
      }>
        <header className='header'>
          <Nav setContent={setContent} />
        </header>

        {/* Main Body */}
        <main className='Main'>
          <Suspense>
            {displayContent[content]}
          </Suspense>
        </main>

        <Canvas shadows={true}>
          <Preload all />
          <ThreeElementsMemo />
        </Canvas>
      </Suspense>
    </div >
  )
}
