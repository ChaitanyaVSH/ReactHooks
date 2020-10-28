import "./App.css";
import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";
import HookCounterObject from "./components/HookCounterObject";
import HookSuperCounter from "./components/HookSuperCounter";
import HookWithArray from "./components/HookWithArray";

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
      <br />
      <HookSuperCounter />
      <br />
      <HookCounterObject />
      <br />
      <HookWithArray />
    </div>
  );
}

export default App;
