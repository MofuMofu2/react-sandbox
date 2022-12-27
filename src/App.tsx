import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is React.js Project.</p>
        <nav>
          <ul>
            <li>
              <a href="{`react-page`}">to React.js Page</a>
            </li>
            <li>
              <a href="{`vue-page`}">to Vue.js Page</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
