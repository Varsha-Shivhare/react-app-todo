import React, { Component } from 'react';
import DisplayItem from "./List";

class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputItem: " ",
            itemList: []
        }
    }

      handleInput = (e) => {
            this.setState ({ inputItem: e.target.value });
    }

      handleSubmit = (e) => {
            e.preventDefault();
            this.setState({
                inputItem: " ",
                itemList: [...this.state.itemList, this.state.inputItem]
            });

        }

    render(){
        return(
                <div class="App-header">
                <div>
                    <input type ="text" placeholder="Enter username..."  value={this.state.inputItem} onChange={this.handleInput}/>
                    <button onClick={this.handleSubmit}  disable={!this.inputItem}>Submit</button>
                     <DisplayItem itemList={this.state.itemList}/>
                </div>
                </div>

        )
    }
}

export default Todo;