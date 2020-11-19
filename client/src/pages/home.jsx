import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import Profile from "../components/profile";
import Cluster from "../components/cluster";

const Home = () => {
  return (
    <Flex
      width="90vw"
      align="center"
      justifyContent="center"
      direction="column"
      marginTop="5vh"
    >
      <Profile
        user={{
          name: "Jainam Shah",
          calendly: "",
          linkedin: "https://linkedin.com/in/jainam-chirag-shah",
          github: "https://github.com/jcs98",
          discord: "https://discordapp.com/users/206875427631923200",
        }}
        color="orange"
      />
      <Flex mt="5vh" mb="1.8vh" px="2vw" width="full">
        <Heading width="full" size="lg">
          Clusters
        </Heading>
      </Flex>
      <Cluster
        data={{
          name: "Pod 1.0.3",
          users: ["jcs98", "flozender", "utkarsh867"],
          defaultCluster: true,
        }}
        color="orange"
      />
      <Cluster
        data={{ name: "Jest", users: ["jcs98", "flozender"] }}
        color="red"
      />
    </Flex>
  );
};

export default Home;
