import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>My First React project</h1>

      <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, <b>{name}</b></p>
    </div>
  );
}

export default App;
