import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import withClass from '../../hoc/withClass';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // const timer = setTimeout(() => alert('Saved data to cloud'), 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const appliedClasses = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        appliedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        appliedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={appliedClasses.join(' ')}>This is really working.</p>
            <button
                ref={toggleBtnRef}
                className={buttonClass}
                onClick={props.clicked}>
                Toggle persons
            </button>
            <button
                onClick={props.login}>
                Login
            </button>
        </div>
    );
};

export default React.memo(withClass(cockpit, classes.Cockpit));