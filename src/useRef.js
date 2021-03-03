import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

function App() {
  const nRef = React.useRef(0);
  // [n, update]里n用不到，这里简写
  const update = React.useState(null)[1]; 
  const log = () => setTimeout(() => console.log(`n: ${nRef.current}`), 1000);
  return (
    <div className="App">
      <p>{nRef.current} nRef添加update后可以实时更新</p>
      <p>
        <button
          onClick={() => {
            nRef.current += 1;
            // 每次点击的时候参数值不一样就行，nRef.current会变，这里就顺便用了
            update(nRef.current); 
          }}
        >
          +1
        </button>

        <button onClick={log}>log</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);