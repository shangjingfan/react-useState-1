import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

let _state = [];
let index = 0;
const xUseState = (initialValue) => {
  const currentIndex = index
  console.log("currentIndex", currentIndex)
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
  
  const setState = (newValue) => {
    _state[currentIndex] = newValue;
    console.log( "_state", _state)               
    render();
  };
  index += 1
  return [_state[currentIndex], setState];
};

const render = () => {
  index = 0
  ReactDOM.render(<App />, rootElement);
};

function App() {
  console.log("App运行了");
  const [n, setN] = xUseState(0);
  const [m, setM] = xUseState(0);
  // console.log("n", n);
  // console.log("m", m);
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
      <hr />
      <p>{m}</p>
      <p>
        <button onClick={() => setM(m + 1)}>+1</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);

