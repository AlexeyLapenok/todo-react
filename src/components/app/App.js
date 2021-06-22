import { Component } from 'react'; import './App.css';
import Header from '../header/Header'
import Main from '../main/Main';

class App extends Component {

  state = {
    tasks: [
      { id: 0, title: 'Read book', done: false },
      { id: 1, title: 'Learn React', done: false }
    ]
  };

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.unshift({
        id: tasks.length || 0,
        title: task,
        done: false
      })
      return state;
    });
  };

  deleteTask = id => {
    // const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });

  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1 className="none">Task list</h1>
        <div className="background"></div>
        <div className="container">
          <Header />
          <Main
            deleteTask={this.deleteTask}
            addTask={this.addTask}
            task={tasks}
          />
        </div>
      </div>

    );
  }
}

export default App;
