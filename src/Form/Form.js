import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
                firstName:{
                    value: "",
                    validation: /^[a-zA-Z]+$/, //depending on condition it can be an array or object or string
                    error: "Invalid first name" //it can be object or string
                },
                lastName:{
                    value: "",
                    validation: /^[a-zA-Z]+$/, //depending on condition it can be an array or object or string
                    error: "Invalid last name" //it can be object or string
                },
                emaiId:{
                    value: "",
                    validation: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                    error: "Invalid Email ID"
                },
                mobile:{
                    value: "",
                    validation: /^[0-9]{10}$/,
                    error: "Invalid mobile number"
                }
        }
    }

    handleValidate = () => {
        const regName = /^[a-zA-Z]+$/;
        if(this.state.username && this.state.username.length<= 3 || this.state.username && !regName.test(this.state.username)){
            return "Invalid name";
            } else {
              return ""
        }
    }

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
                        <input className="element" type="text" placeholder="Firstname" />
                        <input className="element" type="text" placeholder="Lastname" />
                   </lable>
                </div>
                <div className="email">
                    <lable>Email ID:<input  className="element"/></lable>
                    <lable>Mobile:<input  className="element"/></lable>
                </div>
                <div>
                    <button className="button">Show</button>
                </div>
            </div>
        )
    }
}

export default Form;