import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import Profile from "../components/profile";
import ClusterWrapper from "../components/clusterWrapper";

const Home = () => {
  const color = "purple";
  return (
    <Flex width="90vw" align="center" direction="column">
      <Profile
        user={{
          name: "Jainam Shah",
          calendly: "",
          linkedin: "https://linkedin.com/in/jainam-chirag-shah",
          github: "https://github.com/jcs98",
          discord: "https://discordapp.com/users/206875427631923200",
        }}
        color={color}
      />
      <ClusterWrapper username="jcs98" color={color} />
    </Flex>
  );
};

export default Home;
