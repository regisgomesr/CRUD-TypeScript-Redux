import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/create-user" component={CreateUser} />
  </Switch>
);

export default Routes;
