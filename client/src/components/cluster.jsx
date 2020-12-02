import React from "react";
import { Link as ReactLink } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  Spacer,
  Divider,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Avatar,
  AvatarGroup,
  Link,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Member = ({ user, onClose }) => {
  const { name, username, color, pictureURL } = user;

  return (
    <>
      <Divider />
      <ReactLink to={`/users/${username}`} onClick={onClose}>
        <Flex direction="row" align="center" p="4">
          <Avatar mr="4" background={color} src={pictureURL} />
          <Text fontSize="lg" color="black">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500" ml="2">
            ({username})
          </Text>
        </Flex>
      </ReactLink>
    </>
  );
};

const UserAvatar = ({ to, src, name }) => (
  <Tooltip label={name} shouldWrapChildren={false}>
    <ReactLink to={to}>
      <Image as={Avatar} src={src} name={name} showBorder={true} />
    </ReactLink>
  </Tooltip>
);

const Cluster = ({ data, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const follow = (action) => {
    // TODO handle API call here
    const success = true;
    let message;
    if (success && action === "follow") {
      message = {
        title: "Followed cluster! ✨",
        status: "success",
      };
    } else if (success && action === "unfollow") {
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
      <Box>
        <Flex mt="4" mb="2" align="center" direction="row">
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
        <Box py={4} width="100%">
          <AvatarGroup size="md" max={15}>
            {users.map((user) => (
              <Avatar
                to={`/users/${user.username}`}
                size={"lg"}
                background={"gray.400"}
                icon={
                  <UserAvatar
                    to={`/users/${user.username}`}
                    src={user.pictureURL}
                    name={user.name}
                  />
                }
              />
            ))}
          </AvatarGroup>
        </Box>
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
            {users.map((user, id) => (
              <Member key={id} user={user} onClose={onClose} />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cluster;
