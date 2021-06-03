import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChatBot from "./Components/ChatBot";

ReactDOM.render(
  <React.StrictMode>
    <ChatBot />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
