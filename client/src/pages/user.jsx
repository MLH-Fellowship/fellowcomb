import React, { useEffect } from "react";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useParams } from "react-router";
import Profile from "../components/profile";
import ClusterWrapper from "../components/clusterWrapper";
import { useUsername } from "../contexts/usercontext";
import { ME } from "../gql/me";
import { useQuery } from "@apollo/react-hooks";

const User = () => {
  const color = "red";
  const { username } = useParams();
  const myUsername = useUsername();
  const toast = useToast();
  const guest = myUsername !== username;

  const { loading: meLoading, error: meError, data: userData } = useQuery(ME);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const triggerToast = ({ title, description, status }) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  if (meLoading) return <Spinner size="xl" speed="0.50s" color="yellow.500" />;

  if (meError) {
    triggerToast({
      title: "An error has occurred!",
      status: "error",
    });
  }
  return (
    <Flex width="90vw" align="center" direction="column">
      <Profile
        user={{
          username,
          guest,
          name: "Jainam Shah",
          calendly: "",
          linkedin: "https://linkedin.com/in/jainam-chirag-shah",
          github: "https://github.com/jcs98",
          discord: "https://discordapp.com/users/206875427631923200",
          color: color,
        }}
      />
      <ClusterWrapper username={username} color={color} />
    </Flex>
  );
};

export default User;
