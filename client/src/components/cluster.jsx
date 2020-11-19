import React from "react";

import { Box, Flex, Text, Spacer, Divider, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CAvatar from "./clickableAvatar";

const Cluster = ({ data, color }) => {
  const follow = () => alert("Followed!");
  const { name, users, defaultCluster } = data;
  return (
    <Box px="4">
      <Flex mt="4" mb="2" width="full" align="center" direction="row">
        <Text fontSize="xl">{name}</Text>
        <Spacer />
        {defaultCluster ? (
          ""
        ) : (
          <Button
            leftIcon={<FaPlus />}
            colorScheme={color}
            variant="outline"
            onClick={follow}
            size="sm"
          >
            Follow
          </Button>
        )}
      </Flex>
      <Divider />
      <Flex mt="4" mb="8" width="full" align="center" direction="row">
        {users.map((user) => (
          <Box mr="4">
            <CAvatar user={user} color="gray.400" size="md" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Cluster;
