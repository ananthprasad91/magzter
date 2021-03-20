import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authSts: false,
    }
  }
  setAuthSts = (sts) => {
    this.setState({ authSts: sts })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login setAuthSts={this.setAuthSts} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute
            exact
            path="/dashboard"
            component={Dashboard}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
