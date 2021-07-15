import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

const App = () => (
  <h1 className="text-red-500 text-3xl">My React and TypeScript App!!!    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);