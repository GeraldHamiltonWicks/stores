import { useState } from "react";
import { ComponentDidMount } from "./components/ComponentDidMount";
import { ComponentDidUpdate } from "./components/ComponentDidUpdate";
import { ComponentWillUnmount } from "./components/ComponentWillUnmount";
import { LifeCycles } from "./components/LifeCycles";

function App() {  
  const [ show, setShow ] = useState(() => true);
  return (
    <div className="App">
      <button onClick={() => setShow((value) => !value)}>Toggle</button>
      <ComponentDidMount />
      {show ? <ComponentWillUnmount /> : null}
      <ComponentDidUpdate />
    </div>
  );
}

export default App;

