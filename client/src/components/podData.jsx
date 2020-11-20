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

import Cluster from "../components/cluster";

const PodData = () => {
  return (
    <>
      <Flex w="6xl" align="center" direction="row" py="8">
        <Cluster
          data={{
            name: "Pod Leaders",
            users: [
              { username: "KaranSheth", name: "Karan Sheth" },
              { username: "ManyaAgrawal", name: "Manya Agrawal" },
            ],
            defaultCluster: true,
          }}
        />
        <Cluster
          data={{
            name: "Mentors",
            users: [
              { username: "thegoleffect", name: "Van Nyugen" },
              { username: "cewalds", name: "Chris Ewalds" },
            ],
            defaultCluster: true,
          }}
        />
      </Flex>
      <Divider w="6xl" css={{ borderWidth: "2px" }} />
    </>
  );
};

export default PodData;
