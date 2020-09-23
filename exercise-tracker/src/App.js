import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <NavBar />
      <br />
        <Switch>
          <Route exact path='/' component={ExerciseList} />
          <Route path='/edit/:id' component={EditExercise} />
          <Route path='/create' component={CreateExercise} />
          <Route path='/user' component={CreateUser} />
        </Switch>
    </Router>
  );
}

export default App;
