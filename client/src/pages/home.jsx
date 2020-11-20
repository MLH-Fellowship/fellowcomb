import React from "react";
import { Redirect } from "react-router-dom";

import { useUsername } from "../contexts/usercontext";

const Home = (props) => {
  const username = useUsername();
  return username ? (
    <Redirect to={`/users/${username}`} {...props} />
  ) : (
    <Redirect to="/auth" {...props} />
  );
};

export default Home;
