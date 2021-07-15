import React from "react";
import ReactDOM from "react-dom";
import LogoGradient from "./assets/logos/LogoGradient"
import "./assets/styles/index.scss";

const App = () => (
  <div>
    <LogoGradient width={32} height={32} />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);