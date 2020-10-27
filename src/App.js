import "./App.css";
import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";
import HookCounterObject from "./components/HookCounterObject";
import HookSuperCounter from "./components/HookSuperCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
      <HookSuperCounter />
      <br />
      <HookCounterObject />
    </div>
  );
}

export default App;
