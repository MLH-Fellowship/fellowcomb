import React, { useState } from "react";

import {
  Link,
  Icon,
  Avatar,
  HStack,
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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

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

  return (
    <>
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

      <Grid
        p="4"
        templateColumns={["auto", "auto", "1fr auto", "1fr auto", "1fr auto"]}
      >
        <GridItem
          display="grid"
          alignItems="center"
          overflow="hidden"
          gridTemplateColumns={["auto", "auto 1fr", "auto 1fr"]}
        >
          <GridItem mx={["auto", 0]}>
            <Avatar
              size="xl"
              background={iconColor}
              src={user.pictureURL}
              name={user.name}
            />
          </GridItem>
          <GridItem mx={["auto", 4, 8]} textAlign={["center", "left"]} py={4}>
            <Heading>{user.name}</Heading>
            <Text>{user.username}</Text>
          </GridItem>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={10}
          maxW="100%"
        >
          <HStack w="100%" spacing={["auto", "auto", 4, 4, 4]}>
            <Link onClick={() => addOrOpen("Calendly", user.calendly)}>
              <Icon
                as={FaCalendarAlt}
                boxSize={[8, 10, 10, 10, 12]}
                color={user.calendly ? iconColor : disabledColor}
                _hover={{
                  color: user.calendly ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("LinkedIn", user.linkedin)}>
              <Icon
                as={FaLinkedin}
                boxSize={[8, 10, 10, 10, 12]}
                color={user.linkedin ? iconColor : disabledColor}
                _hover={{
                  color: user.linkedin ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("GitHub", user.github)}>
              <Icon
                as={FaGithub}
                boxSize={[8, 10, 10, 10, 12]}
                color={user.github ? iconColor : disabledColor}
                _hover={{
                  color: user.github ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
            <Link onClick={() => addOrOpen("Discord", user.discord)}>
              <Icon
                as={FaDiscord}
                boxSize={[8, 10, 10, 10, 12]}
                color={user.discord ? iconColor : disabledColor}
                _hover={{
                  color: user.discord ? iconHoverColor : disabledColor,
                }}
              />
            </Link>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Profile;
