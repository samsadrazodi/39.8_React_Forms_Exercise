import React from "react";


const Box = ({ width, height, color, removeBox }) => {
    const boxStyle = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
      margin: '10px',
      position: 'relative',
    };
  
    return (
      <div className="box" style={boxStyle}>
        <button className="remove-button" onClick={removeBox}>
          X
        </button>
      </div>
    );
  };

  export default Box;