import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'id1', name: 'Gabriel', age: 19 },
            { id: 'id2', name: 'Griselda', age: 10 },
            { id: 'id3', name: 'Mitchell', age: 30 }
        ],
        otherState: 'whatever',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => p.id === personId);

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
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
        console.log('[App.js] render');
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
                <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Toggle cockpit</button>

                {this.state.showCockpit ?
                    <Cockpit
                        appTitle={this.props.appTitle}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler} />
                    : null}
                {persons}
            </div>
        );
    }
}

export default App;
