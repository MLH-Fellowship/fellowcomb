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
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {BACKEND_SERVER_URL} from "./constants"

const App = () => {
  const userId = useUser();
  const httpLink = createHttpLink({
    uri: `${BACKEND_SERVER_URL}/graphql`,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: userId,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
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
            <Route component={ErrorPage} />
          </Switch>
        </Flex>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
