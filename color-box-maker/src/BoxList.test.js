import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

it('renders without crashing', function (){
    render(<BoxList />);
});

it('matches snapshot', function (){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


it("should add a blue div with specified width and height", () => {
    const { getByLabelText, getByText, container } = render(<BoxList />);
  
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Color:");
    const submitButton = getByText("Add Box");
  
    fireEvent.change(widthInput, { target: { value: "200" } });
    fireEvent.change(heightInput, { target: { value: "200" } });
    fireEvent.change(colorInput, { target: { value: "blue" } });
    fireEvent.click(submitButton);
  
    // Find the added blue box within the rendered container
    const blueBox = container.querySelector(".box");
  
    expect(blueBox).toBeInTheDocument(); // Check if the blue box is in the document
    expect(blueBox).toHaveStyle("width: 200px");
    expect(blueBox).toHaveStyle("height: 200px");
    expect(blueBox).toHaveStyle("background-color: blue");
  });
  
  
  
  
  