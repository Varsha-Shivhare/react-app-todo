import React, { Component } from 'react';
import './style.css';
import List from './List';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            item: []
        }
    }

 handleChange = (e) =>{
    this.setState({name: e.target.value});
}

handleClick = (e) => {
    e.preventDefault()
    this.setState({
            name: "",
            item: [...this.state.item, this.state.name]
    });
}

handleDelete = (i) => {
    let item = [...this.state.item]
    item.splice(i, 1)
    this.setState({
        item
    })
}

render(){
    return (
        <div className='main'>
            <h1>To Do App</h1>
                <input type="text" placeholder='Enter your item' className='input' value={this.state.name} onChange={this.handleChange}/>
                <button className='btn' onClick={this.handleClick}>Add</button> 
             <List  item={this.state.item}  handleDelete={this.handleDelete}/>
        </div>
    )
}
   
}
