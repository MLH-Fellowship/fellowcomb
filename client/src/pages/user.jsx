import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";

import Profile from "../components/profile";
import ClusterWrapper from "../components/clusterWrapper";
import { useUsername } from "../contexts/usercontext";

const User = () => {
  const color = "red";

  const username = useUsername();
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
          color: color,
        }}
      />
      <ClusterWrapper username={username} color={color} />
    </Flex>
  );
};

export default User;
