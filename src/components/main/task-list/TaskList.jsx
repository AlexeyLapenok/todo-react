import { Component } from 'react';
import TaskItem from './item/TaskItem';
import './TaskList.css';
class TaskList extends Component {

    render() {
        const task = this.props.task;

        return (

            <section className="list-container">
                <ul className="list-container_task-list">
                    {
                        task.map(item => (
                            <TaskItem
                                deleteTask={this.props.deleteTask}
                                btnImportant={this.props.btnImportant}
                                task={item.task}
                                id={item.id}
                                key={item.id}
                                title={item.title}
                            />
                        ))
                    }
                </ul>
            </section>

        )
    }
}
export default TaskList;