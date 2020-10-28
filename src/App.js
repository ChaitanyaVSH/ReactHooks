import "./App.css";
import Counter from "./components/useStateHook/Counter";
import HookCounter from "./components/useStateHook/HookCounter";
import HookCounterObject from "./components/useStateHook/HookCounterObject";
import HookSuperCounter from "./components/useStateHook/HookSuperCounter";
import HookWithArray from "./components/useStateHook/HookWithArray";

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
