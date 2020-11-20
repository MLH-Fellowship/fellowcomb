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
} from "@chakra-ui/react";
import { FaCalendarAlt, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Profile = ({ user, user: { color } }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [socialType, setSocialType] = useState("");
  const [socialValue, setSocialValue] = useState("");

  const iconColor = `${color}.500`;
  const iconHoverColor = `${color}.400`;
  const disabledColor = "gray.400";

  const addOrOpen = (type, currentUrl) => {
    if (currentUrl) {
      window.location.href = currentUrl;
    } else {
      setSocialType(type);
      onOpen();
    }
  };

  const updateDetails = (type, url) => {
    // TODO api request to update url
    console.log(socialType + ":" + socialValue);
    onClose();
  };

  return (
    <>
      <Flex w="6xl" align="center" direction="row" py="8">
        <Avatar size="2xl" background={iconColor} />
        <Heading ml="8" size="xl">
          {user.name}
        </Heading>
        <Spacer />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing="4">
                <Text>{socialType} url</Text>
                <Input
                  label="url"
                  onChange={(e) => setSocialValue(e.target.value)}
                />
                <Button colorScheme="yellow" onClick={updateDetails}>
                  Save
                </Button>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
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
      </Flex>
      <Divider w="6xl" css={{ borderWidth: "2px" }} />
    </>
  );
};

export default Profile;
