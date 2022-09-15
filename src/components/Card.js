import React,{useEffect, useState} from 'react'

function Card({head,text,img,selectCard,setSelectCard,assign}) {
    const [styleBorder,setStyleBorder]=useState();
    const handleClick=()=>{
        if(selectCard===assign)return
        else setSelectCard(assign);
    }
    useEffect(()=>{
        if(selectCard===assign)
        {
            setStyleBorder({border:"2px solid #664de5"});
        }
        else
        {
            setStyleBorder({});
        }
    },[selectCard])
  return (
    <div style={{...styles.mainContainer,...styleBorder}} onClick={handleClick}>
        <img style={{width:"20px",height:"20px",marginRight:"8rem"}} src={img} alt="img"/>
        <div style={styles.headContainer}>{head}</div>
        <div style={styles.textContainer}>{text}</div>
    </div>
  )
}

const styles={
    mainContainer:{
        padding:"1rem",
        borderRadius:"5px",
        border:"2px solid #9fa2a6",
        display:"inline-block",
        minWidth:"4rem",
        width:"8rem",
        marginRight:"10px",
        marginTop:"10px",
        cursor:"pointer"
    },
    headContainer:{
        fontWeight:"600",
        marginBottom:"5px",
        textAlign: "left"
    },
    textContainer:{
        fontSize:"smaller",
        color:"#9fa2a6",
        textAlign: "left"
    }
}
export default Card