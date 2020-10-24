import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Gabriel', age: 19 },
//       { name: 'Griselda', age: 10 },
//       { name: 'Mitchell', age: 30 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('whatever');
//   const switchNamesHandler = () => {
//     console.log(personsState, otherState);
//     const persons = [...personsState.persons];
//     persons.reverse();
//     setPersonsState({persons});
//   }

//   return (
//     <div className="App">
//       <h1>Hi! I'm a React App.</h1>
//       <button onClick={switchNamesHandler}>Switch names</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Child Element</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: 'Gabriel', age: 19 },
      { name: 'Griselda', age: 10 },
      { name: 'Mitchell', age: 30 }
    ],
    otherState: 'whatever',
    showPersons: false
  };

  switchNamesHandler = () => {
    const persons = [...this.state.persons];
    persons.reverse();
    this.setState({ persons });
  };

  nameChangedHandler = (event) => {
    const persons = [...this.state.persons];
    persons[1].name = event.target.value;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
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
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNamesHandler} changed={this.nameChangedHandler} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNamesHandler} changed={this.nameChangedHandler}>Child Element</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNamesHandler} changed={this.nameChangedHandler} />
        </div>);
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch names</button>
        {persons}
      </div>
    );
  }
}

export default App;
