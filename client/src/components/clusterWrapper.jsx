import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import Cluster from "../components/cluster";

const ClusterWrapper = ({ username, ...props }) => {
  const getClusters = (username) => alert("Give us the API yugi!");

  //   const clusters = getClusters(username);
  //   dummy array
  const clusters = [
    {
      name: "Pod 1.0.3",
      users: ["jcs98", "flozender", "utkarsh867"],
      defaultCluster: true,
    },
    { name: "Jest", users: ["jcs98", "flozender"] },
  ];
  return (
    <>
      <Flex mt="5vh" mb="1.8vh" px="2vw" width="full">
        <Heading width="full" size="lg">
          {`${username}'s clusters`}
        </Heading>
      </Flex>
      {clusters.map((cluster) => (
        <Cluster data={cluster} {...props} />
      ))}
    </>
  );
};

export default ClusterWrapper;
