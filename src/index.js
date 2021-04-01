import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/info" component={App} />
        <Route exact path="/contact" component={App} />
        <Route exact path="/:post_id" component={App} />

        <Route
          path="*"
          component={() => {
            "404 Error";
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
