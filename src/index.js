import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// react rooter
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';

// redux persist
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.render(
  <Provider store={store}>
      <Router>
        <PersistGate persistor = {persistor}>
                <App/>
        </PersistGate>  
      </Router>
  </Provider>,
  document.getElementById('root')
);

