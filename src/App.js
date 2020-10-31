import "./App.css";
import ClassCounter from "./components/useEffectHook/ClassCounter";
import Counter from "./components/useStateHook/Counter";
import HookCounter from "./components/useEffectHook/HookCounter";
import HookCounterObject from "./components/useStateHook/HookCounterObject";
import HookSuperCounter from "./components/useStateHook/HookSuperCounter";
import HookWithArray from "./components/useStateHook/HookWithArray";
import ClassMouse from "./components/useEffectHook/ClassMouse";
import HookMouse from "./components/useEffectHook/HookMouse";
import MouseContainer from "./components/useEffectHook/MouseContainer";
import IntervalClassCounter from "./components/useEffectHook/IntervalClassCounter";
import IntervalHookCounter from "./components/useEffectHook/IntervalHookCounter";
import DataFetching from "./components/useEffectHook/FetchingData/DataFetching";
import ComponentC from "./components/useContextHook/ComponentC";
import React from "react";

export const userContext = React.createContext();

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
      {/* <ClassCounter /> */}
      {/* <HookCounter />
      <ClassMouse />
      <HookMouse />
      <MouseContainer /> */}

      {/* useEffect() with incorrect dependency */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}

      {/* Data Fetching with hooks */}
      {/* <DataFetching /> */}

      {/* useContext() hook */}
      <userContext.Provider value="Chaitu Maverick">
        <ComponentC />
      </userContext.Provider>
    </div>
  );
}

export default App;
