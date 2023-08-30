import React, {useState} from "react";

const NewTodoForm = ({addTask}) =>{
    const INITIAL_STATE= {
        todo: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({...formData});
        setFormData(INITIAL_STATE);
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo Name:</label>
            <input
            id='todo'
            type='text'
            placeholder="Todo Name"
            name='todo'
            value={formData.todo}
            onChange={handleChange}/>

            <button>Add Todo</button>
        </form>
    )
}


export default NewTodoForm;