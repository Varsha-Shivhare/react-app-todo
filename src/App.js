import React from 'react';
import './App.css';
import Todo from './Person/Todo';
import ToDoItem from './ToDoApp/ToDoList';
import ToDoList from './ToDoApp/ToDoItem';

function App() {
  return (
    <div className="App-header">
      <h3>Programs</h3>
      <Todo />
      <ToDoItem />
      <ToDoList />
    </div>
  );
}

export default App;
