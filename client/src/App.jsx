import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import AuthorizedRoute from "./components/authRoute";

import Header from "./components/header";

import CodeHandler from "./pages/codeHandler";
import Home from "./pages/home";
import SignIn from "./pages/signin";

import { useUser } from "./contexts/usercontext";

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
          <Route exact path="/authorize/github" component={CodeHandler} />
          <Route exact path="/auth" component={SignIn} />
        </Switch>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
