import { Component } from 'react';
import AddTask from './add-task/AddTask';
import Submenu from './submenu/Submenu';
import TaskList from './task-list/TaskList';

class Main extends Component {
    render() {
        const task = this.props.task;
        const addTask = this.props.addTask;
        const deleteTask = this.props.deleteTask;
        const btnImportant = this.props.btnImportant;
        return (
            <main>
                <hr />
                <Submenu task={task} />
                <AddTask addTask={addTask} task={task} />
                <TaskList
                    deleteTask={deleteTask}
                    btnImportant={btnImportant}
                    task={task}
                />
            </main>

        )
    }
}
export default Main;