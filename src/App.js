import React from 'react';
import './App.css';
import Todo from './Person/Todo';
import Main from './Dynamic/Main';
import IoPractice from './Programs/Username/index';

// import { BrowserRouter, Route, Link } from "react-router-dom";

// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;


function App() {
  return (
    <div className="App-header">
      <h3>Programs</h3>
      <Todo />
      <Main />
      <IoPractice />
    </div>
  );
}

export default App;
