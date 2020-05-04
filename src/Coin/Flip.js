import React, { Component } from 'react';

class Coin extends Component{
    constructor(props){
        super(props);
        this.state = {
                heads: 0,
                tails: 0,
                count: 0,
                tailOrHead: null
                
                // (Math.random()<0.5)? '0' : '1'
        }
        
        this.getRandomInt = this.getRandomInt.bind(this);
    } 

    getRandomInt = () => {
        const tailOrHead = (Math.random()<0.5) ? 0 : 1; // math.random function bydefault it returns random value between 0 to 1.
        if(tailOrHead){
            this.setState({
                heads: this.state.heads+1 //Setting the state inside if condition and also used increment counter.
            })
        }else{
            this.setState({
                tails: this.state.tails+1
            }) 
         }
        this.setState({
            tailOrHead,
            count: this.state.count+1 //to setting name with same object name
        })
    }

    render(){
        const {tailOrHead, heads, tails, count} = this.state //destructuring of multiple variables

        return(
            <div className="flipCoin">
                <div>
                    <button className="btn" onClick={this.getRandomInt}>Flip Coin</button>
                </div>
                <div className="displayLabel">
                    <label>{tailOrHead !== null ? tailOrHead ? 'TAIL':'HEAD' :''}</label>
                </div> 
                <div>
                    {heads ? <label>Percent of heads: {(heads/count*100).toFixed(0)}</label> : null} 
                </div>
                <div>
                    {heads ? <label>Percent of tails: {(tails/count*100).toFixed(0)}</label> : null}
                </div>
                </div>
        )  // toFixed is used to get the fixed value and we can give the initial value as a range.
    }
}

// { heads && tails && <div>
//     <label>Percent of heads: {heads/tails*100}</label>
//     <label>Percent of tails: {tails/heads*100}</label>
// </div>}  this is conditional rendering 

export default Coin;