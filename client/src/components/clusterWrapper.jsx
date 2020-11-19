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
    <Flex width="6xl" direction="column">
      <Heading width="full" size="lg" mt="8" mb="4">
        {`${username}'s clusters`}
      </Heading>
      {clusters.map((cluster) => (
        <Cluster data={cluster} {...props} />
      ))}
    </Flex>
  );
};

export default ClusterWrapper;
