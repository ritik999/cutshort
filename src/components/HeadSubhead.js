import React from 'react'

function HeadSubhead({head,subhead}) {
  return (
    <div>
        <div>
            <div style={styles.head}>{head}</div>
            <div style={styles.subhead}>{subhead}</div>
        </div>
    </div>
  )
}

const styles={
    head:{
        fontWeight:"600",
        fontSize:"x-large",
        textAlign:"center"
    },
    subhead:{
        color:"grey",
        textAlign:"center",
        padding:"10px 0 10px",
        fontSize:"small",
        fontWeight:"500"
    }
}

export default HeadSubhead