import Header from './Header/Header';
import Register from './Register/Register';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import { useEffect } from 'react';
import { UserService } from './services/user.service';

function App() {
    const history = useHistory();

    useEffect(()=> {
      UserService.me()
          .then(user=> {
              if(!user){
                // history.push('/login');                
              }
          });
    }, [history]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="myContainer">
          <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact>
              <Feed />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;
