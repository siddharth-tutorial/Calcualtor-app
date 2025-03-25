import React, { useState } from 'react'
import Header from './Header'

function Calculator() {
const [input,setInput]=useState('')
const [input1,setInput1]=useState('')
const [operator,setOperator]=useState(null)
const [result,setResult]=useState(null)

const Operator = (op) => {
    setOperator(op);
  };

function cal(){
    const num1 = parseFloat(input)
    const num2 = parseFloat(input1)
    
    let output=0;
    console.log(operator)
        switch (operator) {
     
            case '+':
              output = num1 + num2;
              break;
            case '-':
              output = num1 - num2;
              break;
            case '*':
              output = num1 * num2;
              break;
            case '/':
             
              output = num1 / num2;
              break;
            default:
            }
            setResult(output)
            console.log(output)
    
}
  return (
    <div>
             <Header/>
      <input type="text" id='num1' value={input} onChange={(e)=>setInput(e.target.value)} style={{padding:'5px',margin:'5px'}} />
      <input type="text" id='num2' value={input1}onChange={(e)=>setInput1(e.target.value)} style={{padding:'5px',margin:'5px'}} />
      <br></br>

        <button type='button' value="+" onClick={()=>Operator('+')} style={{padding:'5px',margin:'5px',fontSize:'18px'}} >+</button>
        <button type='button' value="-" onClick={()=>Operator('-')} style={{padding:'5px',margin:'5px',fontSize:'18px'}}>-</button>
        <button type='button' value="*" onClick={()=>Operator('*')} style={{padding:'5px',margin:'5px',fontSize:'18px'}}>*</button>
        <button type='button' value="/" onClick={()=>Operator('/')} style={{padding:'5px',margin:'5px',fontSize:'18px'}}>/</button><br></br>

        <button type='button'  onClick={cal} style={{padding:'5px',margin:'5px'}}>Calculate</button>
        <input type="text" id='output' value={result} style={{padding:'5px',margin:'5px'}} />

    </div>
  )
}

export default Calculator
