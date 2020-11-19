import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

import Profile from "../components/profile";

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
    </Flex>
  );
};

export default Home;
