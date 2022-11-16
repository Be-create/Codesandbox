import { createContext } from "react";
import { ComponentC } from "./ComponentC";
import "./styles.css";
export const Usercontext = createContext()
export const Codingcontext = createContext()
export default function App() {
  return (
    <div className="App">
      <h1> Context Api</h1>
      <Usercontext.Provider value={"Benzy"}>
      <Codingcontext.Provider value={"Coding"}>
      <ComponentC/>
      </Codingcontext.Provider>
      </Usercontext.Provider>
    </div>
  );
}
