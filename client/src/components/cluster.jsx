import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CAvatar from "./clickableAvatar";

const Member = ({ user, onClose }) => {
  const { id, name, color } = user;

  return (
    <>
      <Divider />
      <ReactLink to={`/users/${id}`} onClick={onClose}>
        <Flex direction="row" align="center" p="4">
          <Avatar mr="4" background={color} />
          <Text fontSize="lg" color="black">
            {/* {name} */}
            {user}
          </Text>
          <Text fontSize="sm" color="gray.500" ml="2">
            ({id})
          </Text>
        </Flex>
      </ReactLink>
    </>
  );
};

const Cluster = ({ data, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MEMBERS_TO_SHOW = 30;

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
    <>
      <Box px="4">
        <Flex mt="4" mb="2" width="full" align="center" direction="row">
          <Link onClick={onOpen}>
            <Text fontSize="xl">{name}</Text>
          </Link>
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
          {users.slice(0, MEMBERS_TO_SHOW).map((user, key) => (
            <WrapItem key={key}>
              <Box>
                <CAvatar user={user} color="gray.400" size="md" />
              </Box>
            </WrapItem>
          ))}
          {users.length > MEMBERS_TO_SHOW ? (
            <Link ml="2" mt="2" color="blue.500" fontSize="lg" onClick={onOpen}>
              +{users.length - MEMBERS_TO_SHOW} members
            </Link>
          ) : null}
        </Wrap>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Members in {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {users.map((user) => (
              <Member key={user.id} user={user} onClose={onClose} />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cluster;
