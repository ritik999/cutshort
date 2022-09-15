import React from 'react'

function InputBox({inName,type,state,setState,error}) {
  return (
    <div style={styles.mainContainer}>
        <div style={styles.text}>{inName}</div>
        <input style={styles.input} type={type} value={state} onChange={(e)=>setState(e.target.value)}/>
        {
          error!==undefined?
          error.map((i,key)=>(
            <div className={styles.errorContainer} key={key}>{i}</div>
          ))
          :
          <> </>
        }
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
        borderRadius: "6px",
        width: "94%",
        fontSize: "small",
        border: "2px #eef1f6 solid",
        color: "#666565"
    },
    errorContainer:{
        paddingBottom: 0,
        color: "red",
        // fontWeight: 500;
        fontSize: "x-small",
        transition: "all 0.3s ease-in-out"
    }
}

export default InputBox