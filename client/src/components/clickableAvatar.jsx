import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const CAvatar = ({ user, color, size, name, pictureURL }) => {
  return (
    <Avatar
      as={ReactLink}
      to={`/users/${user}`}
      size={"md"}
      background={"gray.400"}
      src={user.pictureURL || null}
    />
  );
};

export default CAvatar;
