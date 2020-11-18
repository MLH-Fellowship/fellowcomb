import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import AuthorizedRoute from "./components/authRoute";

import Dashboard from "./pages/homepage";

const App: React.FC = ({ user }) => {
  return (
    <ChakraProvider resetCSS={true}>
      <Switch>
        <AuthorizedRoute exact path="/" user={true} component={Dashboard} />
        <Route
          exact
          path="/auth"
          render={() => (!user ? <Redirect to="/" /> : "Log in!")}
        />
      </Switch>
    </ChakraProvider>
  );
};

export default App;
