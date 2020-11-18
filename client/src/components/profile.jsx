import React from "react";

import {
  Flex,
  Link,
  Icon,
  Avatar,
  Text,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Profile = ({ user, color }) => {
  const iconColor = `${color}.500`;
  const iconHoverColor = `${color}.400`;
  const disabledColor = "gray.400";

  return (
    <Flex width="full" align="center" direction="row" padding="8">
      <Avatar size="2xl" background={iconColor} />
      <Text ml="8" fontSize="2xl">
        {user.name}
      </Text>
      <Spacer />
      <HStack spacing="4">
        <Link href={user.calendly} isExternal>
          <Icon
            as={FaCalendarAlt}
            boxSize="6"
            color={user.calendly ? iconColor : disabledColor}
            _hover={{ color: user.calendly ? iconHoverColor : disabledColor }}
          />
        </Link>
        <Link href={user.linkedin} isExternal>
          <Icon
            as={FaLinkedin}
            boxSize="6"
            color={user.linkedin ? iconColor : disabledColor}
            _hover={{ color: user.linkedin ? iconHoverColor : disabledColor }}
          />
        </Link>
        <Link href={user.github} isExternal>
          <Icon
            as={FaGithub}
            boxSize="6"
            color={user.github ? iconColor : disabledColor}
            _hover={{ color: user.github ? iconHoverColor : disabledColor }}
          />
        </Link>
        <Link href={user.discord} isExternal>
          <Icon
            as={FaDiscord}
            boxSize="6"
            color={user.discord ? iconColor : disabledColor}
            _hover={{ color: user.discord ? iconHoverColor : disabledColor }}
          />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Profile;
