// import React, { useState } from 'react'

import { useState } from "react"
import Header from "./Header";


function State() {

    // const [data,setdata] = useState("CDMI");
    // const [txt,setTxt] = useState("");

    // const handledata = (e) => {
    //     setTxt(e.target.value);
    // }

    const [data,setdata] = useState("Hello");
    const [text,settext] = useState("");

    const handletxt =(e)=>{
        settext(e.target.value);
    }

    return (
        <div>
            <Header/>
            {/* useState
            <h1>{data}</h1>

            <button onClick={()=>(setdata("CREATIVE"))}  >Click</button>

            {/* <input type='text' value={txt} onChange={(e)=>{setTxt(e.target.value)}}  /> */}
            {/* <input type='text' value={txt} onChange={handledata}  /> */}

            {/* <h1>{txt}</h1>  */}
            <h1>{data}</h1>

            <button onClick={()=>(setdata("Namaste"))}>click</button>

            {/* <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}  /> */}
            <input type="text" value={text} onChange={handletxt} />
            <h2>{text}</h2>
            {/* 
            // setprevvalue("");
            // setoperator(""); */
            // using Calculators on switch case 
            }
        </div>
    )
}

export default State


/*

1. couunter
2. 


*/
