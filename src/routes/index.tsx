import React from "react";
import { Switch, Route } from "react-router-dom";

import User from "../pages/User";
import CreateUser from "../pages/CreateUser";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={User} />
    <Route path="/create-user" component={CreateUser} />
  </Switch>
);

export default Routes;
