import React from "react";

import { Flex, Box, Heading, Image, Button, Link } from "@chakra-ui/react";
import Honeycomb from "../assets/Honeycomb.png";

const SignIn = () => {
  const { REACT_APP_GITHUB_CLIENT_ID } = process.env;

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="60vh"
    >
      <Image width="7rem" src={Honeycomb} />
      <Box>
        <Heading my={"2rem"} size="3xl" fontFamily="'KoHo', sans-serif;">
          fellowcomb
        </Heading>
      </Box>
      <Link
        style={{ textDecoration: "none" }}
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_GITHUB_CLIENT_ID}`}
      >
        <Button colorScheme="yellow">Continue with Github</Button>
      </Link>
    </Flex>
  );
};

export default SignIn;
