function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ background: "#A876FF", height: "80px" }}>
          <p style={{ textAlign: "center" }}>Header Section</p>
        </div>
        <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
          <h1>Hello Biswarup</h1>
        </div>
        <div style={{ background: "#A876FF" }}>
          <p style={{ textAlign: "center" }}>Footer section</p>
        </div>
      </div>
    </>
  );
}

export default App;
