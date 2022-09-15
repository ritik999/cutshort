import React, { useEffect, useState } from 'react'
import sty from "./progressBar.module.css";
function ProgressBar({current,max}) {
    const [left,setLeft]=useState((current/max)*100);
    useEffect(()=>{
        setLeft((current/max)*100);
    },[current])
  return (
    <div className={sty.progress}>
        <div style={{...styles.progressBar,backgroundImage:`linear-gradient(to right, #664de5 0%,#664de5 ${left}%, #f0f3f8 ${left}%, #f0f3f8 100%)`}}/>
        <div style={styles.progressSteps}>
            {
                [...new Array(max)].map((i,k)=>(
                    k+1<=current?
                    <div key={k} style={{...styles.step,color:"white",backgroundColor:"#664de5",border:0}}>{k+1}</div>
                    :
                    <div key={k} style={styles.step}>{k+1}</div>
                ))
            }
        </div>
    </div>
  )
}

const styles={
    progress:{
        position:"relative",
        marginBottom:"3rem",
        width:"24rem"
    },
    progressBar:{
        width:"100%",
        backgroundImage: "linear-gradient(to right, #664de5 0%,#664de5 50%, white 50%, white 100%)",
        height:"3px",
    },
    progressSteps:{
        display:"flex",
        justifyContent:"space-between",
        position:"relative",
        bottom:"22px"
    },
    step:{
        width:"40px",
        height:"40px",
        backgroundColor:"white",
        borderRadius:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"black",
        border:"2px solid #f0f3f8"
    }
}

export default ProgressBar