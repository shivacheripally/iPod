// Importing necessary modules from react and react-dom
import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Importing main App component from App.js
import App from "./App";

// Getting root element from HTML document
const rootElement = document.getElementById("root");

// Rendering the App component wrapped in StrictMode component on the root element
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
