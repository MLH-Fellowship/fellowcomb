import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import Header from "./components/header";

import CodeHandler from "./pages/codeHandler";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import User from "./pages/user";
import ErrorPage from "./pages/error";

import { useUser } from "./contexts/usercontext";
import GraphView from "./pages/graphView";

const App = () => {
  const userId = useUser();
  console.log("APP", userId);
  return (
    <ChakraProvider resetCSS={true}>
      <Header />
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        direction="column"
      >
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              userId ? <Home {...props} /> : <Redirect to="/auth" />
            }
          />
          <Route
            exact
            path="/authorize/:service"
            render={(props) => <CodeHandler {...props} />}
          />
          <Route exact path="/auth" component={SignIn} />
          <Route
            exact
            path="/users/:username"
            render={(props) =>
              userId ? <User {...props} /> : <Redirect to="/auth" />
            }
          />
          <Route exact path="/graph-view" component={GraphView} />
          <Route component={ErrorPage} />
        </Switch>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
