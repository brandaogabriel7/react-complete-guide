import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const APP_TITLE = 'Person Manager App';

ReactDOM.render(<App appTitle={APP_TITLE} />, document.getElementById('root'));
registerServiceWorker();
