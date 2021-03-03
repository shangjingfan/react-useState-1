import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

let _state;
const xUseState = (initialValue) => {
  _state = _state === undefined ? initialValue : _state;
  const setState = (newValue) => {
    _state = newValue;
    render();
  };
  return [_state, setState];
};

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

function App() {
  console.log("App运行了");
  const [n, setN] = xUseState(0);
  console.log("n", n);
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
