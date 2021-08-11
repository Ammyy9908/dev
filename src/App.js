import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Profile from './Pages/Profile';
import SignOutConfirm from './Pages/SignOutConfirm';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cookies from 'js-cookie';
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/_appActions';
import Create from './Pages/Create';
import dotnenv from "dotenv";


dotnenv.config();

function App(props) {

  React.useEffect(()=>{
    if(Cookies.get("AUTH_TOKEN") && !props.user){
      axios.get(`https://dev-server-community.herokuapp.com/user`,{
        headers:{
          "Authorization":Cookies.get("AUTH_TOKEN")
        }
      }).then((res)=>{
        console.log(res);
        props.setUser(res.data.user);
      })
    }
  },
  // eslint-disable-next-line
  []);
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
      <Route exact path="/new">
      <Create/>
      </Route>
      <Route path="/login/:token" render={(props) => {
     const token = props.match.params.token;
      return <Login token={token}/>
  }}  />
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


const dispatchToProps = (dispatch)=>({
  setUser:(user)=>dispatch(setUser(user))
})
export default connect(null,dispatchToProps)(App);
