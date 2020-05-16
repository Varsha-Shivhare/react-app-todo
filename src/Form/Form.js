import React, { Component } from 'react';


class Form extends Component{
    render(){
        return(
            <div className="form">
                <div className="info">
                    <h3>ToDo Form</h3>
                </div> 
                <div className="select"> 
                <label for="title">
                        <select>
                            <option value="">Mr.</option>
                            <option value="">Mrs.</option>
                            <option value="">Miss</option>
                            <option value="">Others</option>
                        </select> 
                </label>
                   <lable> 
                        <input  className="element" type="text" placeholder="Firstname" />
                        <input  className="element" type="text" placeholder="Lastname" />
                  </lable>
                </div>
                <div className="email">
                    <lable>Email ID:<input  className="element"/></lable>
                    <lable>Mobile:<input  className="element"/></lable>
                </div>

                <div >
                    <button className="button">Show</button>
                </div>
            </div>
        )
    }
}

export default Form;