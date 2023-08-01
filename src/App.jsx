import './App.css';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense, useState, useEffect, } from 'react';
import { Stats, AdaptiveDpr, Preload } from '@react-three/drei';
import Ping2 from '/Audio/Ping2.mp3';
import { ScaleLoader } from 'react-spinners';
import { Loader } from '@react-three/drei';

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
  const [displayNav, setDisplayNav] = useState('flex')





  useEffect(() => {

    setDisplayNav('flex')


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
    <div className='scene'>
      {/* Nav Component */}
      <Suspense fallback={
        <div className='loading-spinner-container'>
          <ScaleLoader color="#00CEDD" />
        </div>
      }>




        <header className='header'>
          <Nav setContent={setContent} displayNav={displayNav} />
        </header>

        {/* Main Body */}
        <main className='Main'>
          <Suspense>
            {displayContent[content]}
          </Suspense>
        </main>


        <Canvas shadows={true}>
          <ThreeElementsMemo />
        </Canvas>

      </Suspense >
    </div >
  )
}
