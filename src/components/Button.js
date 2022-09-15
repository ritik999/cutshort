import React,{useState} from 'react'

function Button({text,onClick}) {
    const [clickStyle,setClickStyle]=useState({});
    const handleClick=()=>{
        setClickStyle({backgroundColor:"#503eb0"});
        onClick();
    }
  return (
    <button style={{...styles.button,...clickStyle}} onClick={handleClick}>{text}</button>
  )
}

let styles={
    button:{
        width:"100%",
        border:0,
        backgroundColor:"#664de5",
        height:"2.5rem",
        borderRadius:"6px",
        fontSize:"small",
        transition: "all 0.4s ease-in-out",
        cursor:"pointer",
        fontWeight:"600",
        color:"#ddd8f9"
    }
}

export default Button