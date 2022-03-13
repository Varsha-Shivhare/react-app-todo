import React, {useState} from 'react';
import './Calc.css'

export default function Calculator() {
    
   const [result, setResult] = useState("")
    
   const  handleClick = (e) => {
        setResult(result.concat(e.target.value))
    }

    const handleResult = () => {
        setResult(eval(result).toString());
    }
    
    const handleClear = () => {
        setResult("")
    }
    
        return (
           <div className='calculator'>    
               <input type="text" placeholder='0' className='input' value={result} />
               <input className='button' type="button" value="0" onClick={handleClick}/>
               <input className='button' type="button" value="1" onClick={handleClick}/>
               <input className='button' type="button" value="2" onClick={handleClick}/>
               <input className='button' type="button" value="3" onClick={handleClick}/>
               <input className='button' type="button" value="4" onClick={handleClick}/>
               <input className='button' type="button" value="5" onClick={handleClick}/>
               <input className='button' type="button" value="6" onClick={handleClick}/>
               <input className='button' type="button" value="7" onClick={handleClick}/>
               <input className='button' type="button" value="8" onClick={handleClick}/>
               <input className='button' type="button" value="9" onClick={handleClick}/>
               <input className='button' type="button" value="+" onClick={handleClick}/>
               <input className='button' type="button" value="-" onClick={handleClick}/>
               <input className='button' type="button" value="*" onClick={handleClick}/>
               <input className='button' type="button" value="/" onClick={handleClick}/>
               <input className='button' type="button" value="=" onClick={handleResult}/>
               <input className='button' type="button" value="Clear" onClick={handleClear}/>             
           </div>
        )
    }
