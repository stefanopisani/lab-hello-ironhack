import './app.css';
import React from 'react';
import FirstItem from './components/Item1.js';
import SecondItem from './components/Item2';
import ThirdItem from './components/Item3';
import FourthItem from './components/Item4';

function App() {
    return (
        <main> 
        <div className="main"> 
        <nav className="navbar"> 
        <img src="public/images/ironhack-logo.svg"/> 
        <img src="public/images/menu-top.svg"/>
        </nav>
        
        <div className="content"> 
        <h1> Say hello to React JS </h1>
        <h3> You will learn how to use the most popular frontend library, and become a super Ninja developer </h3>
        <button className="button"> Awesome! </button>
        </div>
        </div>
        <div className="items">
        <FirstItem />
        <SecondItem />
        <ThirdItem />
        <FourthItem />
        </div>
        
        </main>
    )
}
export default App;