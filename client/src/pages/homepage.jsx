import React from "react";

import { Flex, Box, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="60vh"
    >
      <Box>
        <Heading m={50}>Fellowcomb</Heading>
      </Box>
    </Flex>
  );
};

export default Dashboard;
