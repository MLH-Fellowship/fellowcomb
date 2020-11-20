import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Avatar, Text } from "@chakra-ui/react";

const CAvatar = ({ user, color, size, pfp, name }) => {
  return (
    <ReactLink to={`/users/${user}`}>
      <Box align="center" justifyContent="center">
        <Avatar size={size} background={color} />
        <Text>{name}</Text>
      </Box>
    </ReactLink>
  );
};

export default CAvatar;
