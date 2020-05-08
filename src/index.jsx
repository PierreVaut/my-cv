import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ResumeContext, { initialState } from './context';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>


        <Route path="/pierre-vautherin-cv-2020">
          <ResumeContext.Provider value={initialState}>
            <App />
          </ResumeContext.Provider>
        </Route>

        <Route path="/">
          Nothing here yet...
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
