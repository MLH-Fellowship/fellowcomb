import React from "react";

import {
  Box,
  Flex,
  Text,
  Spacer,
  Divider,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
      <Wrap
        spacing="4"
        mt="4"
        mb="8"
        width="full"
        align="center"
        direction="row"
      >
        {users.map((user) => (
          <WrapItem>
            <Box>
              <CAvatar user={user} color="gray.400" size="md" />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Cluster;
