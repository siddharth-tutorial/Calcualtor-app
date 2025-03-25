import React, { useState } from 'react'
import Header from './Header'
import './calculator.css'
function Calculators() {
    const [input,setInput]=useState('')


    const backSpace=()=>{
        setInput(input.slice(0,-1))

    }

    const appendNumber=(number)=>{
        setInput(input +number)
        console.log(number)
    }

    const appendOperator=(operator)=>{
        setInput(input+ operator)
        console.log(operator)
    }

    const clearDisplay=()=>{
        setInput('')
    }

    const result=()=>{
        try {
            setInput(eval(input).toString()); 
        } catch (error) {
            setInput('Error'); 
            console.log(eval)
        }
        
    }
  return (
    <div>
      <Header/>
      <div className="calculator">
  <input type="text" value={input} id="display" readOnly />
  <button type="button" value="x" id="btn" onClick={()=>backSpace()}>x</button>
  <div className="buttons">
    <button className="button" onClick={()=>appendNumber('1')}>1</button>
    <button className="button" onClick={()=>appendNumber('2')}>2</button>
    <button className="button" onClick={()=>appendNumber('3')}>3</button>
    <button className="button" onClick={()=>appendOperator('/')}>/</button>
    <button className="button" onClick={()=>appendNumber('4')}>4</button>
    <button className="button" onClick={()=>appendNumber('5')}>5</button>
    <button className="button" onClick={()=>appendNumber('6')}>6</button>
    <button className="button" onClick={()=>appendOperator('*')}>*</button>
    <button className="button" onClick={()=>appendNumber('7')}>7</button>
    <button className="button" onClick={()=>appendNumber('8')}>8</button>
    <button className="button" onClick={()=>appendNumber('9')}>9</button>
    <button className="button" onClick={()=>appendOperator('-')}>-</button>
    <button className="button" onClick={()=>appendNumber('0')}>0</button>
    <button className="button" onClick={clearDisplay}>CE</button> 
    <button className="button" onClick={result}>=</button>
    <button className="button" onClick={()=>appendOperator('+')}>+</button>
  </div>
</div>

    </div>
  )
}

export default Calculators