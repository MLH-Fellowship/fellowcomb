import React from "react";

import {
  Flex,
  Link,
  Icon,
  Text,
  Spacer,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CAvatar from "./clickableAvatar";

const Cluster = ({ data, color }) => {
  const follow = () => alert("Followed!");
  const { name, users, defaultCluster } = data;
  return (
    <>
      <Divider />
      <Flex mt="2vh" mb="1vh" width="full" align="center" direction="row">
        <Text ml="8" fontSize="xl">
          {name}
        </Text>
        <Spacer />
        {defaultCluster ? (
          ""
        ) : (
          <Button
            leftIcon={<FaPlus />}
            colorScheme={color}
            variant="outline"
            onClick={follow}
          >
            Follow
          </Button>
        )}
      </Flex>
      <Divider />
      <Flex
        mt="3vh"
        mb="1vh"
        mx="10"
        px="8"
        width="full"
        align="center"
        direction="row"
      >
        {users.map((user) => (
          <CAvatar user={user} color="gray.400" size="md" />
        ))}
      </Flex>
    </>
  );
};

export default Cluster;
