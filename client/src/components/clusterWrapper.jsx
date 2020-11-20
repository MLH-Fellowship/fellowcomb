import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
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
  useToast,
} from "@chakra-ui/react";
import Cluster from "../components/cluster";
import { FaPlus } from "react-icons/fa";

const ClusterWrapper = ({ username, color, ...props }) => {
  const getClusters = (username) => alert("Give us the API yugi!");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clusterName, setClusterName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const toast = useToast();

  const createCluster = () => {
    if (!clusterName) return;
    setIsCreating(true);
    // TODO api request to create cluster
    console.log(clusterName);

    const success = false;
    if (success) {
      toast({
        title: "New cluster created",
        description: "A new cluster was created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error creating cluster",
        description: "Could not create the cluster, try again later...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setIsCreating(false);
    setClusterName("");
    onClose();
  };

  //   const clusters = getClusters(username);

  //   dummy array
  const clusters = [
    {
      name: "Pod 1.0.3",
      users: [
        "jcs98",
        "flozender",
        "utkarsh867",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
        "jcs98",
      ],
    },
    { name: "Jest", users: ["jcs98", "flozender"] },
    { name: "Jest", users: ["jcs98", "flozender", "utkarsh867"] },
    { name: "Jest", users: ["jcs98", "flozender"] },
    { name: "Jest", users: ["jcs98", "flozender"] },
    { name: "Jest", users: ["jcs98", "flozender"] },
    { name: "Jest", users: ["jcs98", "flozender"] },
  ];
  return (
    <>
      <Flex width="6xl" direction="column">
        <Flex align="center" mt="8" mb="4">
          <Heading width="full" size="lg">
            {`${username}'s clusters`}
          </Heading>
          <Spacer />
          <Button
            leftIcon={<FaPlus />}
            colorScheme={color}
            onClick={onOpen}
            size="sm"
            mt="4"
          >
            New
          </Button>
        </Flex>
        <Box maxH="50vh" overflowY="scroll">
          {clusters.map((cluster, key) => (
            <Cluster data={cluster} {...props} key={key} />
          ))}
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new cluster</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4" mb="2">
              <Input
                placeholder="eg. Hiking"
                onChange={(e) => setClusterName(e.target.value)}
              />
              <Button
                colorScheme={color}
                onClick={createCluster}
                isLoading={isCreating}
              >
                Create
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClusterWrapper;
