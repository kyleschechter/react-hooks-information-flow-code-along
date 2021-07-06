import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  const handleClick = () => {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return <div 
  className="child" 
  style={{ backgroundColor: color }} 
  onClick={handleClick}
  />;
}

export default Child;
