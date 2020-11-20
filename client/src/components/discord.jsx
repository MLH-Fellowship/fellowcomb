import React from "react";

import {
  Flex,
  Box,
  Heading,
  Image,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";

const Discord = () => {
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="60vh"
    >
      <Box align="center">
        <Heading my={"2rem"} size="3xl" fontFamily="'KoHo', sans-serif;">
          Connect to Discord
        </Heading>
        <Text mb="6vh" fontSize="xl">
          fellowcomb uses discord to create connections, let's hook that up.
        </Text>
      </Box>
      <Link
        style={{ textDecoration: "none" }}
        href="https://discord.com/api/oauth2/authorize?client_id=778655560777465876&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthorize%2Fdiscord&response_type=code&scope=guilds.join%20identify%20guilds%20bot"
      >
        <Button colorScheme="purple">Connect</Button>
      </Link>
    </Flex>
  );
};

export default Discord;
