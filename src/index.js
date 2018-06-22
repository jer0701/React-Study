import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './react-redux/Store';
import ClickCounter from './ClickCounter';
import ControlPanel from './react-redux/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
