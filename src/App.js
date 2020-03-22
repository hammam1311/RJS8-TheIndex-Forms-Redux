import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

const App = () => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="content col-10">
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
