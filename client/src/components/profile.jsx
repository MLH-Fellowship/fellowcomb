import React, { useState } from "react";

import {
  Flex,
  Link,
  Icon,
  Avatar,
  Spacer,
  HStack,
  Divider,
  Heading,
  useDisclosure,
  Button,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { createDM } from "../services/query";

const Profile = ({ user, user: { color, discord_id } }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [socialType, setSocialType] = useState("");
  const [socialValue, setSocialValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const toast = useToast();

  const iconColor = `${color}.500`;
  const iconHoverColor = `${color}.400`;
  const disabledColor = "gray.400";

  const addOrOpen = (type, currentUrl) => {
    // guest
    if (user.guest) {
      if (currentUrl) {
        window.location.href = currentUrl;
      }
    } else {
      // self
      if (type === "Discord") window.location.href = currentUrl;
      else {
        setSocialType(type);
        onOpen();
      }
    }
  };

  const updateDetails = () => {
    if (!(socialType && socialValue)) return;
    // TODO api request to update url
    console.log(socialType + ":" + socialValue);
    setIsUpdating(true);

    const success = false;
    if (success) {
      toast({
        title: "Details updated",
        description: "Your details were updated successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error updating details",
        description: "Could not update your details, try again later...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setIsUpdating(false);
    setSocialType("");
    setSocialValue("");
    onClose();
  };

  const callCreateDM = (discord_id) => {
    // createDM(discord_id).then((response) => {
    //   console.log(response.data);
    // });
    window.location.href = `https://discordapp.com/users/${discord_id}`;
  };
  return (
    <>
      <Flex w="6xl" align="center" direction="row" py="8">
        <Avatar size="2xl" background={iconColor} />
        <Box ml="8">
          <Heading size="xl">{user.name}</Heading>
          <Text fontSize="xl">{user.username}</Text>
        </Box>
        <Spacer />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing="2" mb="2">
                <Text>{socialType} url</Text>
                <Input
                  label="url"
                  placeholder="eg. https://  ..."
                  onChange={(e) => setSocialValue(e.target.value)}
                />
                <Button
                  colorScheme={user.color}
                  onClick={updateDetails}
                  isLoading={isUpdating}
                >
                  Save
                </Button>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box>
          {user.guest ? (
            <Button
              width="full"
              my="2vh"
              colorScheme={user.color}
              onClick={() => callCreateDM(discord_id)}
            >
              CHAT
            </Button>
          ) : (
            ""
          )}
          <HStack spacing="4">
            <Link onClick={() => addOrOpen("Calendly", user.calendly)}>
              <Icon
                as={FaCalendarAlt}
                boxSize="6"
                color={user.calendly ? iconColor : disabledColor}
                _hover={{
                  color: user.calendly ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("LinkedIn", user.linkedin)}>
              <Icon
                as={FaLinkedin}
                boxSize="6"
                color={user.linkedin ? iconColor : disabledColor}
                _hover={{
                  color: user.linkedin ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("GitHub", user.github)}>
              <Icon
                as={FaGithub}
                boxSize="6"
                color={user.github ? iconColor : disabledColor}
                _hover={{
                  color: user.github ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("Discord", user.discord)}>
              <Icon
                as={FaDiscord}
                boxSize="6"
                color={user.discord ? iconColor : disabledColor}
                _hover={{
                  color: user.discord ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
          </HStack>
        </Box>
      </Flex>
      <Divider w="6xl" css={{ borderWidth: "2px" }} />
    </>
  );
};

export default Profile;
