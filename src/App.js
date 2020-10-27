import "./App.css";
import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";
import HookSuperCounter from "./HookSuperCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
      <HookSuperCounter />
    </div>
  );
}

export default App;
