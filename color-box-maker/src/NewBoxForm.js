import React, {useState} from "react";

const NewBoxForm = ({ addBox }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [color, setColor] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (width && height && color) {
        addBox(width, height, color);
        setWidth('');
        setHeight('');
        setColor('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit">Add Box</button>
      </form>
    );
  };


  export default NewBoxForm;