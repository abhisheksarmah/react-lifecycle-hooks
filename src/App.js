import { useState } from "react";
import RenderedComponent from "./components/FComponent";

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <div>
        <button onClick={() => setFlag(!flag)}>
          Toggle rendered component
        </button>
      </div>
      {flag ? <RenderedComponent /> : ""}
    </div>
  );
}

export default App;
