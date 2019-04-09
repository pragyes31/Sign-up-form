import React from 'react';
import './Styles/App.css';
import SignUp from './Components/SignUp.component'
import SignIn from './Components/SignIn.component'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from './Components/Header.component'

const App = (
  <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route path="/" component={SignUp} exact={true} />
      <Route path="/SignIn" component={SignIn} />
      </Switch>
      </div>
      </Router>
)

export default App;
