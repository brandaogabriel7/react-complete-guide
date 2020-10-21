import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Gabriel', age: 19 },
      { name: 'Griselda', age: 10 },
      { name: 'Mitchell', age: 30 }
    ],
    otherState: 'whatever'
  }

  switchNamesHandler = () => {
    const persons = [...this.state.persons];
    persons.reverse();
    this.setState({persons});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <button onClick={this.switchNamesHandler}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Child Element</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
