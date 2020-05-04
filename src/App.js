import React from 'react';
import './App.css';
import Todo from './Person/Todo';
import Main from './Dynamic/Main';
import IoPractice from './Programs/Username/index';
import Coin from './Coin/Flip';

// import { BrowserRouter, Route, Link } from "react-router-dom";

// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;


function App() {
  return (
    <div className="App-header">
        <Todo />
        <Main />
        <IoPractice />
        <Coin />
    </div>
  );
}

export default App;
