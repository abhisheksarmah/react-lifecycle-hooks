import React, { useContext, useState } from "react";
import { CounterContext } from "./CounterContext";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
        <button onClick={() => setCounter(counter - 1)}>decrement</button>
      </div>
      <hr></hr>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <FComponent />
        <hr></hr>
        {/* <CComponent /> */}
      </CounterContext.Provider>
    </div>
  );
}

const FComponent = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <div className="border">
        <h1>Function component</h1>
        <h2>{counter}</h2>
        <hr></hr>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
        <FChild />
      </div>
    </div>
  );
};

const FChild = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <div className="border">
        <h1>Function child component</h1>
        <h2>{counter}</h2>
        <hr></hr>
        <button onClick={() => setCounter(counter - 1)}>decrement</button>
      </div>
    </div>
  );
};

class CComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="border">
          <h1>Class component</h1>
          <CounterContext.Consumer>
            {(value) => {
              return <h2>{value}</h2>;
            }}
          </CounterContext.Consumer>
        </div>
      </div>
    );
  }
}

export default App;
