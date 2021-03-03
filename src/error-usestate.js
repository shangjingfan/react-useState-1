import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

let _state = [];
let index = 0;
const xUseState = (initialValue) => {
  const currentIndex = index
  // console.log("currentIndex", currentIndex)
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
  
  const setState = (newValue) => {
    _state[currentIndex] = newValue;             
    render();
  };
  // console.log( "_state", _state)  
  index += 1
  return [_state[currentIndex], setState];
};

const render = () => {
  index = 0
  ReactDOM.render(<App />, rootElement);
};

function App() {
  const [n, setN] = React.useState(0); 
  let k, setK
  if (n % 2 === 1) { // 不允许这么写，React.useState 也不允许
    [k, setK] = React.useState(0)
  }
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>n+1</button>
      </p>
      <hr />
      <p>{k}</p>
      <p>
        <button onClick={() => setK(k + 1)}>k+1</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
