import { Component } from 'react';

class TaskItem extends Component {

    render() {
        const classImportant = (this.props.isImportant ? "is-important" : "");
        const classDone = this.props.done ? "is-done" : "";
        const classNone = this.props.done ? "none" : "";
        const btnImportant = "flex-container_button-important " + (this.props.isImportant ? "not-important" : "");
        const notImportant = this.props.isImportant ? "NOT " : "MARK ";
        return (
            <li className="">
                <p
                    onClick={() => this.props.handleDone(this.props.id)}
                    className={classImportant + ' ' + classDone}>
                    {this.props.title}
                </p>
                <div className="flex-container">
                    <button
                        className={btnImportant || classNone}
                        onClick={() => this.props.handleIsImportant(this.props.id)}>
                        {notImportant} IMPORTANT
                    </button>
                    <button
                        className="flex-container_button-delete"
                        onClick={() => this.props.deleteTask(this.props.id)}>
                    </button>
                </div>
            </li>
        )
    }
}
export default TaskItem;