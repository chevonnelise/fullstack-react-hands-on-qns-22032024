import React, { useState } from 'react';

export default function AreaForm() {

  // 1. hook
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");


  // 2. initialization
  const updateWidth = (event) => {
    setWidth(event.target.value);
  }

  const updateHeight = (event) => {
    setHeight(event.target.value);
  }

  // 3. calculate area
  const area = width * height;

  // 4. return jsx
  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input type="text" value={width} onChange={updateWidth} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" value={height} onChange={updateHeight} />
      </div>
      <div>Area = {area}</div>
    </React.Fragment>
  )

}

