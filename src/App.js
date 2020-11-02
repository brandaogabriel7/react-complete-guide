import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Gabriel', age: 19 },
      { id: 'id2', name: 'Griselda', age: 10 },
      { id: 'id3', name: 'Mitchell', age: 30 }
    ],
    otherState: 'whatever',
    showPersons: false
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => <Person key={person.id} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)} />)}
        </div>);
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
