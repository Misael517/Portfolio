import '../Sidebar/Sidebar.css'

import HTML5 from '../Sidebar/Img/Stack-Icons/HTML5.png'
import CSS3 from '../Sidebar/Img/Stack-Icons/CSS3.png'
import Js from '../Sidebar/Img/Stack-Icons/Js.png'
import React from '../Sidebar/Img/Stack-Icons/React.png'
import TypeScript from '../Sidebar/Img/Stack-Icons/Typescript.png'
import Figma from '../Sidebar/Img/Stack-Icons/Figma.png'
import Github from '../Sidebar/Img/Stack-Icons/Github.png'
import Git from '../Sidebar/Img/Stack-Icons/Git.png'

export default function Home() {
    return (
        <div className="Sidebar-Container">
            <div className='Profile-Img'></div>

            <div className='Stack-Container'>
                <h6 className='Stack-Title'>Stack</h6>

                <img src={HTML5} className='Icon' alt='HTML 5 Logo' />
                <img src={CSS3} className='Icon' alt='CSS 3 Logo' />
                <img src={Js} className='Icon Icon-Border' alt='Java Script Logo' />
                <img src={React} className='Icon Icon-Border' alt='React Logo' />
                <img src={TypeScript} className='Icon Icon-Border' alt='TypeScript 5 Logo' />
                <img src={Figma} className='Icon' alt='Figma Logo' />
                <img src={Github} className='Icon' alt='Github Logo' />
                <img src={Git} className='Icon' alt='Git Logo' />
            </div>
        </div>
    )
}