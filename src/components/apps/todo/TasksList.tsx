import React, {useState} from 'react';
import TasksForm from "./TasksForm";

function TasksList() {
    const [tasks, setTasks] = useState<string[]>([])

    function addTask(task: any) {
        if (!task.text || /^\s*$/.test(task.text)) {
            return
        }
        const newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div>
            <h1>Plans</h1>
            <TasksForm/>
        </div>
    );
}

export default TasksList;
