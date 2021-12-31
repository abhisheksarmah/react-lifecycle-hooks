import ScreenComponent from "./components/ScreenComponent";
import useCounter from "./useCounter";
function App() {
  const [counter, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Use Reducer hook</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <ScreenComponent />
    </div>
  );
}

export default App;
