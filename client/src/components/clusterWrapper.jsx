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

const ClusterWrapper = ({ username, color, clusters, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clusterName, setClusterName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const toast = useToast();
  console.log(clusters);
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

  if (!clusters) return;
  return (
    <>
      <Flex direction="column" width="100%">
        <Flex align="baseline" my="8" justifyContent="space-between">
          <Heading>Groups</Heading>
          <Button leftIcon={<FaPlus />} colorScheme={color} onClick={onOpen}>
            New
          </Button>
        </Flex>
        <Box>
          {clusters.map((cluster, key) => (
            <Cluster color={color} data={cluster} {...props} key={key} />
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
