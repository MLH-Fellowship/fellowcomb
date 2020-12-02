import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import { ME } from "../gql/me";
import { useQuery } from "@apollo/react-hooks";

const Home = (props) => {
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    ME
  );

  if (userLoading) {
    return <Spinner size="xl" speed="0.50s" color="yellow.500" />;
  } else if (userError) {
    console.log(userError);
    return <></>;
  }

  console.log(userData);
  const currentUser = userData.me;
  console.log("HOME", currentUser.username);

  return currentUser.username ? (
    <Redirect to={`/users/${currentUser.username}`} {...props} />
  ) : (
    <Redirect to="/auth" {...props} />
  );
};

export default Home;
