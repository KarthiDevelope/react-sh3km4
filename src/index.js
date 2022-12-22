import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";

const First = () => {
  return (
    <div className="ui comments">
      <App />
      <App />
      <App />
    </div>
  );
};

//Display Using Id

ReactDom.render(<First />, document.querySelector("#root"));
