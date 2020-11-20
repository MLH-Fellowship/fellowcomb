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
  useToast,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CAvatar from "./clickableAvatar";

const Cluster = ({ data, color }) => {
  const follow = (action) => {
    // TODO handle API call here
    const success = true;
    let message;
    if (success && action == "follow") {
      message = {
        title: "Followed cluster! ✨",
        status: "success",
      };
    } else if (success && action == "unfollow") {
      message = {
        title: "Unfollowed cluster.",
        status: "success",
      };
    } else {
      message = {
        title: "An error has occurred!",
        status: "error",
      };
    }
    triggerToast(message);
  };
  const { name, users, defaultCluster } = data;

  const toast = useToast();
  const triggerToast = ({ title, description, status }) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  // TODO: decide if the user is following this cluster
  let action = "unfollow";
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
            onClick={() => follow(action)}
            size="sm"
          >
            {action}
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
        {users.map((user, key) => (
          <WrapItem key={key}>
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
