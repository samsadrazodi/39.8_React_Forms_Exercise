import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import './BoxList.css'
const BoxList =() =>{
    const [boxes, setBoxes] = useState([]);


    const addBox = (width,height, color)=>{
        setBoxes([...boxes, {width, height, color}]);
    };

    const removeBox= (index)=>{
        const newBoxes = boxes.filter((_, i) => i !== index);
        setBoxes(newBoxes);
    };

    return (
        <div>
            <div className="form">
            <NewBoxForm addBox={addBox} />
            </div>
        <div className="boxes">
        {boxes.map((box, index) => (
          <Box
            key={index}
            width={box.width}
            height={box.height}
            color={box.color}
            removeBox={() => removeBox(index)}
          />
        ))}
        </div>
      </div>
    )
}

export default BoxList;