import React, { Component } from 'react';

class Coin extends Component{
    constructor(props){
        super(props);
        this.state = {
                heads: 0,
                tails: 0,
                tailOrHead: null
                
                // (Math.random()<0.5)? '0' : '1'
        }
        
        this.getRandomInt = this.getRandomInt.bind(this);
    } 

    getRandomInt = () => {
        const tailOrHead = (Math.random()<0.5) ? 0 : 1;
        if(tailOrHead){
            this.setState({
                heads: this.state.heads+1
            })
        }else{
            this.setState({
                tails: this.state.tails+1
            }) 
         }
        this.setState({
            tailOrHead
        })
    }

    render(){
        const {tailOrHead} = this.state
        const {heads} = this.state
        const {tails} = this.state
        return(
            <div>
                <div>
                    <button className="btn" onClick={this.getRandomInt} >Flip Coin</button>
                    <label>{tailOrHead !== null ? tailOrHead ? 'HEAD':'TAIL' :''}</label>
                </div> 
                { heads && tails && <div>
                     <label>Percent of heads: {heads/tails*100}</label>
                     <label>Percent of tails: {tails/heads*100}</label>
                </div>} 
            </div>
        )
    }
}

// { heads && tails && <div>
//     <label>Percent of heads: {heads/tails*100}</label>
//     <label>Percent of tails: {tails/heads*100}</label>
// </div>}  this is conditional rendering 

export default Coin;