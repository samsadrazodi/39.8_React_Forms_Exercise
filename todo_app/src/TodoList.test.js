import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";


it('renders without crashing', function (){
    render(<TodoList />);
});

it('matches snapshot', function (){
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add a new Todo', function (){
    const {queryByText, getByLabelText} = render(<TodoList />);
    const input = getByLabelText('Todo Name:');
    const btn = queryByText('Add Todo');

    fireEvent.change(input,{target:{value:'test the app'}});
    fireEvent.click(btn);

    expect(queryByText('test the app')).toBeInTheDocument();
})