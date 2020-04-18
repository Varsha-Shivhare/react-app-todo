import React from 'react';
import Display from './Display';
import Options from './Options';

class Main extends React.Component{
constructor(props){
    super(props);
    this.state={
        name: 'Rhea'
    };

    this.changeName = this.changeName.bind(this); //
}

//newName will be called to change the name by setting previously defined state with newName
changeName(newName){ 
 this.setState({
     name: newName
 });
}

//This will display the changed name by selecting name in option

render(){
    return(
        <div className="inputWrapper"> 
            <Display onChange={this.changeName}/>
            <Options name={this.state.name}/>
        </div>
    )}

}



export default Main;
