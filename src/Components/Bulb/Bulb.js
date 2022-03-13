import React, {useState} from 'react';
import img1 from './assets/bulboff.gif';
import img2 from './assets/bulbon.gif';
import './Bulb.css';


function Bulb() {

    const  [bulbOn, setBulbOn]= useState(img1)

    const HandleOn = () =>{
        setBulbOn(img2)
    }

    const HandleOff = () =>{
        setBulbOn(img1)
    }



    return (
        <div className='main'>
            <button className='btn1' onClick={HandleOn}>Turn On</button>
            <img className='bulb' src={bulbOn} alt='bulb' />
            <button  className='btn2' onClick={HandleOff}>Turn Off</button>
        </div>
    )
}

export default Bulb;

//function changeImage() {
   // var image = document.getElementById('myImage');
   // if (image.src.match("bulbon")) {
   //   image.src = "pic_bulboff.gif";
  //  } else {
  //    image.src = "pic_bulbon.gif";
  //  }
 // }//
