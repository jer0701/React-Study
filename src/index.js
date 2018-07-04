import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import TodoApp from './todo/TodoApp';
import store from './todo/Store.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
