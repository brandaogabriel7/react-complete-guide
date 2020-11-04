import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const appliedClasses = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        appliedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        appliedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={appliedClasses.join(' ')}>This is really working.</p>
            <button className={buttonClass} onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;