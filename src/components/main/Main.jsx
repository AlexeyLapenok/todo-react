import { Component } from 'react';
import AddTask from './add-task/AddTask';
import Submenu from './submenu/Submenu';
import TaskList from './task-list/TaskList';
import TaskLista from './task-list/TaskLista';
import TaskListd from './task-list/TaskListd';
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
                {/* <Route path="/all">
                    <TaskList
                        deleteTask={deleteTask}
                        handleDone={this.props.handleDone}
                        handleIsImportant={this.props.handleIsImportant}
                        task={task}
                        stateApp={this.props.stateApp}
                    />
                </Route> */}

                <Route path="/active" >
                    <TaskLista
                        deleteTask={deleteTask}
                        handleDone={this.props.handleDone}
                        handleIsImportant={this.props.handleIsImportant}
                        task={task}
                        stateApp={this.props.stateApp}
                    />

                </Route>

                <Route path="/done">
                    <TaskListd
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