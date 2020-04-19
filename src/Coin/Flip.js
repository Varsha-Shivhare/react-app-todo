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
        this.setState({
            tailOrHead
        })
    }

    render(){
        const {tailOrHead} = this.state
        return(
            <div>
                <div>
                    <button onClick={this.getRandomInt}></button>
                    <label>{tailOrHead !== null && tailOrHead ? 'HEAD':'TAIL'}</label>
                </div> 
                <div>
                    <label></label>
                </div>
            </div>
        )
    }
}

export default Coin;