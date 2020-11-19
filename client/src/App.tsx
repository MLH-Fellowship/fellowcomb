import React from "react";
import { Route, Switch } from "react-router-dom";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import AuthorizedRoute from "./components/authRoute";

import Header from "./components/header";

import Home from "./pages/home";
import SignIn from "./pages/signin";

const App: React.FC = ({ user }) => {
  return (
    <ChakraProvider resetCSS={true}>
      <Header />
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        direction="column"
        paddingBottom="10"
      >
        <Switch>
          <AuthorizedRoute exact path="/" user={true} component={Home} />
          <Route exact path="/auth" component={SignIn} />
        </Switch>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
