import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  HashRouter, Switch, Route
} from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ResumeContext, { initialState } from './context'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/pierre-vautherin-cv-2025">
          <ResumeContext.Provider value={initialState}>
            <App />
          </ResumeContext.Provider>
        </Route>

        <Route path="/">Nothing here yet...</Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
