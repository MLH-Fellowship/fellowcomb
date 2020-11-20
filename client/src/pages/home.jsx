import React, { useContext } from "react";
import { Flex, useToast } from "@chakra-ui/react";

import Profile from "../components/profile";
import ClusterWrapper from "../components/clusterWrapper";
import { useUser } from "../contexts/usercontext";

const Home = () => {
  const color = "purple";
  const userId = useUser();
  const toast = useToast();

  console.log("HOME", userId);
  // TODO: get username from graphql
  const username = userId;
  toast.closeAll();
  return (
    <Flex width="90vw" align="center" direction="column">
      <Profile
        user={{
          username,
          name: "Jainam Shah",
          calendly: "",
          linkedin: "https://linkedin.com/in/jainam-chirag-shah",
          github: "https://github.com/jcs98",
          discord: "https://discordapp.com/users/206875427631923200",
          color: "red",
        }}
      />
      <ClusterWrapper username={username} color={color} />
    </Flex>
  );
};

export default Home;
