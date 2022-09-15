import React from 'react'

function SpecialInputBox({inName,type,state,setState,error,specailText}) {
  return (
    <div style={styles.mainContainer}>
        <div style={styles.text}>{inName}</div>
        <div style={{display:"flex",borderRadius:"20px"}}>
            <div style={styles.specailText}>{specailText}</div>
            <input style={styles.input} type={type} value={state} onChange={(e)=>setState(e.target.value)}/>
        </div>
    </div>
  )
}

const styles={
    mainContainer:{
        marginTop:"15px"
    },
    text:{
        color: "#66748f",
        fontSize: "smaller",
        fontWeight: "500"
    },
    input:{
        marginTop:"5px",
        outline: 0,
        padding: "8px 8px",
        width: "94%",
        fontSize: "small",
        border: "2px #eef1f6 solid",
        color: "#666565",
        webkitBorderTopRightRadius: "11px",
        webkitBorderBottomRightRadius: "11px",
        mozBorderRadiusTopRight: "11px",
        mozBorderRadiusBottomRight: "11px",
        borderTopRightRadius: "11px",
        borderBottomRightRadius: "11px",
    },
    specailText:{
        marginTop:"5px",
        color:"#66748f",
        backgroundColor:"#f8faf9",
        padding:"0.4rem  0.4rem",
        webkitBorderTopLeftRadius: "11px",
        webkitBorderBottomLeftRadius: "11px",
        mozBorderRadiusTopleft: "11px",
        mozBorderRadiusBottomleft: "11px",
        borderTopLeftRadius: "11px",
        borderBottomLeftRadius: "11px",
        fontSize:"smaller",
        textAlign:"center"
    },
    errorContainer:{
        paddingBottom: 0,
        color: "red",
        // fontWeight: 500;
        fontSize: "x-small",
        transition: "all 0.3s ease-in-out"
    }
}

export default SpecialInputBox