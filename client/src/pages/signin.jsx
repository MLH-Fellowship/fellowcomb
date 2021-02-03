import React from "react";
import { useLocation } from "react-router-dom";
import { Flex, Box, Heading, Image, Button, Link } from "@chakra-ui/react";
import Honeycomb from "../assets/Honeycomb.png";

const SignIn = () => {
  const { protocol, host } = window.location;
  const redirect_uri = encodeURIComponent(
    `${protocol}//${host}/authorize/discord`
  );

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
        href={`https://discord.com/api/oauth2/authorize?client_id=778655560777465876&redirect_uri=${redirect_uri}&response_type=code&scope=guilds%20identify`}
      >
        <Button colorScheme="yellow">Continue with Discord</Button>
      </Link>
    </Flex>
  );
};

export default SignIn;
