import React, { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router";
import Profile from "../components/profile";
import ClusterWrapper from "../components/clusterWrapper";
import { useUsername } from "../contexts/usercontext";
import {ME} from "../gql/me";
import { useQuery } from '@apollo/react-hooks';

const User = () => {
  const color = "red";
  const { username } = useParams();
  const myUsername = useUsername();
  const guest = myUsername !== username;

  const {
    loading: meLoading,
    error: meError,
    data: userData
  } = useQuery(ME);

  useEffect(() => {
    console.log(userData)
  }, [userData])
  
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
