import MainBox from "./screens/MainBox";
function App() {
  return (
    <div style={styles.app}>
      <MainBox/>
    </div>
  );
}

const styles={
  app:{
    minHeight: "100%",
    position: "absolute",
    left: 0,
    width: "100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
}

export default App;
