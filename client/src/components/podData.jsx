import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import Cluster from "../components/cluster";

const PodData = ({ podLeaders, mentors }) => {
  if (!(podLeaders.length || mentors.length)) {
    return <Divider w="6xl" borderWidth={2} />;
  }

  return (
    <>
      <Flex w="100%" direction="row" py={4}>
        {podLeaders.length ? (
          <Flex pr={10}>
            <Cluster
              data={{
                name: "Pod Leaders",
                users: podLeaders,
                defaultCluster: true,
              }}
            />
          </Flex>
        ) : (
          <></>
        )}
        {mentors.length ? (
          <Flex>
            <Cluster
              data={{
                name: "Mentors",
                users: mentors,
                defaultCluster: true,
              }}
            />
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};

export default PodData;
