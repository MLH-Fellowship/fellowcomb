import React from "react";

import {
  Flex,
  Box,
  Heading,
  Image,
  Button,
  Link,
  LinkOverlay,
} from "@chakra-ui/react";
import Honeycomb from "../assets/Honeycomb.png";

import Profile from "../components/profile";

const Dashboard = () => {
  const { REACT_APP_GITHUB_CLIENT_ID } = process.env;

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="60vh"
    >
      {/* <Profile
        user={{
          name: "Jainam Shah",
          calendly: "",
          linkedin: "https://linkedin.com/in/jainam-chirag-shah",
          github: "https://github.com/jcs98",
          discord: "https://discordapp.com/users/206875427631923200",
        }}
        color="teal"
      /> */}
      <Image width="7rem" src={Honeycomb} />
      <Box>
        <Heading my={"2rem"} fontFamily="'KoHo', sans-serif;">
          fellowcomb
        </Heading>
      </Box>
      <Link
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_GITHUB_CLIENT_ID}`}
      >
        <Button>Continue with Github</Button>
      </Link>
    </Flex>
  );
};

export default Dashboard;
