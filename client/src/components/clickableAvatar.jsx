import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Link, Avatar } from "@chakra-ui/react";

const CAvatar = ({ user, color, size }) => {
  return (
    <ReactLink to={`/users/${user}`} mt="2vh">
      <Avatar size={size} background={color} mx="0.5vw" />
    </ReactLink>
  );
};

export default CAvatar;
