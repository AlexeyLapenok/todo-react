import { Component } from 'react';
import AddTask from './add-task/AddTask';
import Submenu from './submenu/Submenu';
import TaskList from './task-list/TaskList';
import TaskListActive from './task-list/TaskListActive';
import TaskListDone from './task-list/TaskListDone';
import { Route } from 'react-router-dom';

class Main extends Component {
    render() {
        const task = this.props.task;
        const addTask = this.props.addTask;
        const deleteTask = this.props.deleteTask;
        return (

            <main>
                <hr />
                <Submenu task={task} />
                <AddTask addTask={addTask} task={task} />
                <Route exact path="/">
                    <TaskList
                        deleteTask={deleteTask}
                        handleDone={this.props.handleDone}
                        handleIsImportant={this.props.handleIsImportant}
                        task={task}
                        stateApp={this.props.stateApp}
                    />
                </Route>

                <Route exact path="/active" >
                    <TaskListActive
                        deleteTask={deleteTask}
                        handleDone={this.props.handleDone}
                        handleIsImportant={this.props.handleIsImportant}
                        task={task}
                        stateApp={this.props.stateApp}
                    />

                </Route>

                <Route exact path="/done">
                    <TaskListDone
                        deleteTask={deleteTask}
                        handleDone={this.props.handleDone}
                        handleIsImportant={this.props.handleIsImportant}
                        task={task}
                        stateApp={this.props.stateApp}
                    />
                </Route>

            </main>
        )
    }
}
export default Main;