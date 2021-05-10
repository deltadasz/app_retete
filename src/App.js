import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Add_recipe from './Pages/Add_recipe';
import Breakfast from './Pages/Breakfast';
import Dinner from './Pages/Dinner';
import Lunch from './Pages/Lunch';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
    <div className="App">
    <Router>
      <div>
     <Navbar />
     <Switch>
       <Route path='/breakfast' exact component={Breakfast} />
       <Route path='/dinner' component={Dinner} />
       <Route path='/lunch' component={Lunch} />
       <Route path='/add_recipe' component={Add_recipe} />
     </Switch>
   </div>
    </Router>
  </div>

    </>
  );
}

export default App;
