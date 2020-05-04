import React, { Component } from 'react';
import List from './List';



class ToDo extends Component{
    constructor(props){
        super(props);
        this.state={
            inputItem: "",
            item: []
        }
    }
    
    handleInput = (e) => {
      this.setState({inputItem: e.target.value});
    }

    handleAdd = (e) => {
        e.preventDefault();
      this.setState({
            inputItem: "",
            item: [...this.state.item, this.state.inputItem]
      });
    }

    handleDelete = (i) => {
        let item =[...this.state.item]; //Refrence breaking 
        item.splice(i, 1); //this will help in deleting element and give new array
        this.setState({
            item //this will return the slpiced array
        })

    }

    render(){
        return(
        <div className="block">
            <div className ="App-header">
                <div className="inputWrapper">
                  <h3>Programs</h3>
                    <input className="inputBox" type="text" placeholder="Enter Username..." value={this.state.inputItem} onChange={this.handleInput}/>
                    <button className="btn" onClick={this.handleAdd}  disabled={!this.state.inputItem}>Add</button>
                </div>
                <div>
                    <List item={this.state.item} handleDelete={this.handleDelete}/>
                </div>
            </div>
        </div>
        )
    }
}

export default ToDo;