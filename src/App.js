import "./App.css";
import ClassCounter from "./components/useEffectHook/ClassCounter";
import Counter from "./components/useStateHook/Counter";
import HookCounter from "./components/useEffectHook/HookCounter";
import HookCounterObject from "./components/useStateHook/HookCounterObject";
import HookSuperCounter from "./components/useStateHook/HookSuperCounter";
import HookWithArray from "./components/useStateHook/HookWithArray";

function App() {
  return (
    <div className="App">
      {/* useState() Hooks */}
      {/* <Counter />
      <HookCounter />
      <br />
      <HookSuperCounter />
      <br />
      <HookCounterObject />
      <br />
      <HookWithArray /> */}

      {/* useEffect() Hooks */}
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
