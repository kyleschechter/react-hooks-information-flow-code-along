import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  const changeColor = (newChildColor) => {
    const newColor = getRandomColor()
    setColor(newColor)
    setChildColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child 
      color={childColor}
      onChangeColor={changeColor}
      />
      <Child 
      color={childColor}
      onChangeColor={changeColor}
      />
    </div>
  );
}

export default Parent;
