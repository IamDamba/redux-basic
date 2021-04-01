import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Info from "./pages/info/Info.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Post from "./pages/post/Post.jsx";

const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:post_id" component={Post} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
