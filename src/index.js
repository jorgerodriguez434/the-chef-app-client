import React from "react";
import { render } from "react-dom";
import LoginForm from "./components/login-form";
import Dashboard from "./components/dashboard";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
