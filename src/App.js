import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    
    
    <Switch>
    <Route exact path="/">
      <Home/>
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
