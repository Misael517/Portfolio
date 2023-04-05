import { memo } from "react";
import './Stack.css';
import HTML5 from './Img/HTML5.png';
import CSS3 from './Img/CSS3.png';
import JavaScript from './Img/JavaScript.png';
import React from './Img/React.png';
import TypeScript from './Img/TypeScript.png';
import Github from './Img/Github.png';
import Git from './Img/git.png';
import Figma from './Img/Figma.png';

const StackList = [
    { id: 1, name: 'HTML 5', image: HTML5, alt: 'HTML5-Logo' },
    { id: 2, name: 'CSS 3', image: CSS3, alt: 'CSS3-Logo' },
    { id: 3, name: 'Java Script', image: JavaScript, alt: 'JavaScript-Logo' },
    { id: 4, name: 'React', image: React, alt: 'React-Logo' },
    { id: 5, name: 'TypeScript', image: TypeScript, alt: 'TypeScript-Logo' },
    { id: 6, name: 'Github', image: Github, alt: 'Github-Logo' },
    { id: 7, name: 'Git cmd', image: Git, alt: 'Git-Logo' },
    { id: 8, name: 'Figma', image: Figma, alt: 'Figma-Logo' },
]

function Stack() {
    return (
        <div className="Stack-border">
            <div className="Stack-container">
                {StackList.map((stack) => {
                    return <div key={stack.id} className="Logo-Container">
                        <img src={stack.image} className="Logo-Img" alt={stack.alt} />
                        <p className="Stack-p">{stack.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

const StackMemo = memo(Stack);

export default StackMemo;