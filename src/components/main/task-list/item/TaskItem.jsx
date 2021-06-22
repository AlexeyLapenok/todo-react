import { Component } from 'react';

class TaskItem extends Component {
    state = {
        isImportant: false,
        isDone: false
    };
    handleChange = () => {
        this.setState({ isImportant: !this.state.isImportant });
    };
    handleDone = () => {
        console.log(this.state.isDone);
        this.setState({ isDone: !this.state.isDone });
    };
    render() {
        const classImportant = (this.state.isImportant ? "is-important" : "");
        const classDone = this.state.isDone ? "is-done" : "";
        const classNone = this.state.isDone ? "none" : "";
        const btnImportant = "flex-container_button-important " + (this.state.isImportant ? "not-important" : "");
        const notImportant = this.state.isImportant ? "NOT " : "MARK ";
        return (
            <li className="">
                <p onClick={() => this.handleDone()} className={classImportant + ' ' + classDone}>{this.props.title}</p>
                <div className="flex-container">
                    <button className={btnImportant || classNone} onClick={() => this.handleChange()}>{notImportant} IMPORTANT</button>
                    <button className="flex-container_button-delete" onClick={() => this.props.deleteTask(this.props.id)}></button>
                </div>
            </li>
        )
    }
}
export default TaskItem;