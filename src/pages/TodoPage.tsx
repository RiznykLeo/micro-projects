import React from 'react';
import TasksList from "../components/apps/todo/TasksList";

function TodoPage() {

    return (
        <div className='flex flex-col justify-center items-center'>
            <TasksList/>
        </div>
    )
}

export default TodoPage;
