import React, {useState} from 'react';

export interface ITodo {
    id: number,
    todo: string
}

function TodoPage() {

    const [list, setList] = useState<ITodo[]>([])
    const [input, setInput] = useState('')

    function addTodo(todo: string) {

        const newTodo = {
            id: Math.random(),
            todo: todo,
        }
        setList([...list, newTodo])
        setInput('')
    }

    function deleteTodo(id: number) {
        setList(list.filter((todo: any) => {
            return todo.id !== id
        }))
        return
    }

    return (
        <div className='h-screen w-screen bg-blue-400'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-blue-100 m-4'>
                    Todo List
                </h1>
                <form className='flex justify-between items-center p-2 w-1/3'
                      onSubmit={(e) => {
                          e.preventDefault()
                      }}>
                    <input
                        className='w-full focus:outline-none rounded w-full m-2 px-4 py-2 '
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        type="text"/>
                    <button
                        className='rounded m-2 px-4 py-2
                        bg-emerald-500 text-white w-1/4'
                        onClick={() => addTodo(input)}
                    >
                        Add Task
                    </button>
                </form>
                <ul className='mt-4 w-1/3 bg-amber-300 min-h-[200px] rounded-2xl h-full p-2'>
                    {list.map((todo: any) => {
                        return (
                            <li key={todo.id}
                                className='flex justify-between items-center '>
                                <span
                                    className='py-2 px-4 bg-white w-full m-1 rounded'>
                                    {todo.todo}
                                </span>
                                <button
                                    className='ml-9 py-2 px-4 bg-red-500
                                    text-white rounded'
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoPage;
