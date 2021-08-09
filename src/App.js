import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Profile from './Pages/Profile';
import SignOutConfirm from './Pages/SignOutConfirm';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
    <div>
    
    
    <Switch>
    <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/register">
      <Register/>
      </Route>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/profile">
      <Profile/>
      </Route>
      <Route exact path="/signout-confirm">
      <SignOutConfirm/>
      </Route>
  <Route path="/top/:type" render={(props) => {
     const type = props.match.params.type;
      return <Home type={type}/>
  }}  />
     
     
    </Switch>
  </div>
  </Router>
  );
}

export default App;
