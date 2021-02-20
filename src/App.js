import React from 'react'

//router
import { Route, Redirect, Switch } from 'react-router-dom';

//component - views
import MyPlan from './components/views/MyPlan';
import Login from './components/views/Login'
import Signup from './components/views/Signup'

//styles
import './styles/index.scss'

function App() {
  return (
    
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <Redirect from='/' to='/my-plan' />
        </Route>
        
        <Route path="/my-plan" component={MyPlan} />

        <Route path="/signup" component={Signup}/>

        <Route path="/login" component={Login}/>

      </Switch>
    </div>
  );
}

export default App;
