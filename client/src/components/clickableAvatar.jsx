import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Link, Avatar } from "@chakra-ui/react";

const CAvatar = ({ user, color, size }) => {
  return (
    <ReactLink to={`/users/${user}`}>
      <Avatar size={size} background={color} />
    </ReactLink>
  );
};

export default CAvatar;
