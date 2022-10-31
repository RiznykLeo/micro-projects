import React, {useState} from 'react';

function TasksForm(props: any) {

    const [input, setInput] = useState('')

    function handleSubmit(e: any) {
        e.preventDefault()

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })
        setInput('')
    }

    function handleChange(e: any) {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}
              className='mt-2'>
            <input type="text"
                   placeholder='Add a task'
                   value={input}
                   name='text'
                   onChange={(e) => handleChange(e)}
                   className="border-2 rounded px-4 py-2 m-2"
            />
            <button className='border-2 rounded px-4 py-2'>Add task</button>
        </form>
    );
}

export default TasksForm;
