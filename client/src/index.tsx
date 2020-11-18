import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
