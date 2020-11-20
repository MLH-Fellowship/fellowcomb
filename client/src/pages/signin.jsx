import React from "react";

import { Flex, Box, Heading, Image, Button, Link } from "@chakra-ui/react";
import Honeycomb from "../assets/Honeycomb.png";

const SignIn = () => {
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
        href="https://discord.com/api/oauth2/authorize?client_id=778655560777465876&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthorize%2Fdiscord&response_type=code&scope=guilds.join%20identify%20guilds%20bot"
      >
        <Button colorScheme="yellow">Continue with Discord</Button>
      </Link>
    </Flex>
  );
};

export default SignIn;
