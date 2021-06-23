import { Component } from 'react'; import './App.css';
import Header from '../header/Header'
import Main from '../main/Main';

class App extends Component {

  state = {
    tasks: [
      { id: 0, title: 'Read book', done: false, isImportant: false },
      { id: 1, title: 'Learn React', done: true, isImportant: false }
    ]
  };

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.unshift({
        id: tasks.length || 0,
        title: task,
        done: false,
        isImportant: false
      })
      return state;
    });
  };

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  handleDone = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = !tasks[index].done;
      return tasks;
    })
  };
  handleIsImportant = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].isImportant = !tasks[index].isImportant;
      return tasks;
    })
  };

  filterList = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.title.toLowerCase().search(e.target.value))
    });
    console.log(this.state.tasks);
    // this.setState({ items: filteredList });
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('state');
    if (localStorageRef) {
      this.setState({ tasks: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state.tasks));
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1 className="none">Task list</h1>
        <div className="background"></div>
        <div className="container">
          <Header filterList={this.filterList} />
          <Main
            deleteTask={this.deleteTask}
            addTask={this.addTask}
            handleDone={this.handleDone}
            handleIsImportant={this.handleIsImportant}
            task={tasks}
            stateApp={this.state}
          />
        </div>
      </div>

    );
  }
}

export default App;
