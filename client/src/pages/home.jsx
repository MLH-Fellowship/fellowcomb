import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="60vh"
    >
      <Box>
        <Heading my={"2rem"} fontFamily="'KoHo', sans-serif;">
          fellowcomb
        </Heading>
      </Box>
    </Flex>
  );
};

export default Home;
