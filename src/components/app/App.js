import { Component } from 'react'; import './App.css';
import Header from '../header/Header'
import Main from '../main/Main';

class App extends Component {

  state = {
    search: '',
    tasks: [
      { id: 0, title: 'Read book(EXAMPLE)', done: false, isImportant: true },
      { id: 1, title: 'Learn React(EXAMPLE)', done: true, isImportant: false }
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

  componentDidMount() {
    const localStorageRef = localStorage.getItem('state');
    if (localStorageRef) {
      this.setState({ tasks: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state.tasks));
  }

  searchItem = (search) => {
    this.setState({ search });

  };
  searchChanged(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {

      return item.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1 className="none">Task list</h1>
        <div className="background"></div>
        <div className="container">
          <Header task={tasks} searchItem={this.searchItem} />
          <Main
            deleteTask={this.deleteTask}
            addTask={this.addTask}
            handleDone={this.handleDone}
            handleIsImportant={this.handleIsImportant}
            task={tasks}
          />
        </div>
      </div>

    );
  }
}

export default App;
