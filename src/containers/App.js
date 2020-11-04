import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>);
        }

        return (
            <div className={classes.App}>
                <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
