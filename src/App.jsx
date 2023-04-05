import './App.css';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense, useState, useEffect, } from 'react';
import { Stats, AdaptiveDpr, } from '@react-three/drei';
import Ping2 from '/Audio/Ping2.mp3';

// Lazy Imports
const Nav = lazy(() => import('./components/Nav/Nav'));
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

    audio2.volume = 0.4;

    return () => {
      audio2.pause();
      audio2.currentTime = 0;
    };

  }, [content]);


  return (
    <div className='scene'>
      {/* Nav Component */}
      <div className='head'>
        <Suspense fallback={null}>
          <Nav setContent={setContent} />
        </Suspense>
      </div>

      {/* Main Body */}
      <main className='Main'>
        <Suspense fallback={null}>
          {displayContent[content]}
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Canvas shadows={true}>
          <Stats />
          <AdaptiveDpr pixelated />
          <ThreeElementsMemo />
        </Canvas>
      </Suspense>
    </div >
  )
}
