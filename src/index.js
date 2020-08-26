import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';

const Index = () => {
  return (
    <div>
      Hello React Webpack4!
      <div className="img"/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));

