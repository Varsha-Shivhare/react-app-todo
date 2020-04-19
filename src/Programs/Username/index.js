import React, { Component } from 'react';
import ShowList from './ShowList';

class IoPractice extends Component{
constructor(props){
    super(props);
    this.state={
        username: '',
        item: []
    }
}

handleInput = (e) => {
    this.setState({username: e.target.value});
  }

  handleSubmit = (e) => {
      e.preventDefault();
    this.setState({
          username: "",
          item: [...this.state.item, this.state.username]
    });
  }

  handleValidate = () => {
    const regName = /^[a-zA-Z]+$/;
    if(this.state.username && this.state.username.length<= 3 || this.state.username && !regName.test(this.state.username)){
        return "Invalid name";
        }else{
        return ""
        }
  }

    render(){
        const {username} = this.state
        return(
            <div className ="App-header">
                <div  className="heading">
                     <h3>My first programme</h3>
                </div>  
            <div className="inputWrapper">
                <input className="inputBox" type="text" placeholder="Enter Username..." value={username} onChange={this.handleInput}/>
                <button className="btn" onClick={this.handleSubmit} disabled={!username || this.handleValidate()}>Submit</button>
                {this.handleValidate()}
            </div>
            <div>
                <ShowList item={this.state.item} />
            </div>
        </div>
        )
    }
}

export default IoPractice;