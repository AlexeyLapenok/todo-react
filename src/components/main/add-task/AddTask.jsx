import { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

    state = {
        input: ''
    };

    addInput = () => {
        const { input } = this.state;
        if (input) {
            this.props.addTask(input);
            this.setState({ input: '' });

        }
    }

    inputChange = event => {
        this.setState({ input: event.target.value });
    }
    handleEnter = event => {
        if (event.key === 'Enter') this.addInput();
    };
    render() {
        const { input } = this.state;

        return (
            <section className="add-container">
                <form className="add-container_task-form" method="post">
                    <label className="add-container_task-form--input-label"
                        htmlFor="task-input"
                    >New Task</label>
                    <textarea
                        type="text"
                        value={input}
                        onChange={this.inputChange}
                        onKeyPress={this.handleEnter}
                        className="add-container_task-form--input"
                        id="task-input"
                        maxLength="50"
                        required
                    ></textarea>
                    <button
                        onClick={() => this.addInput()}
                        className="add-container_task-form--add"
                    >ADD</button>
                </form>
            </section>
        )
    }
}
export default AddTask;