import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

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
    {
      name: "Jest",
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
    <Flex width="6xl" direction="column">
      <Heading width="full" size="lg" mt="8" mb="4">
        {`${username}'s clusters`}
      </Heading>
      <Box maxH="50vh" overflowY="scroll">
        {clusters.map((cluster) => (
          <Cluster data={cluster} {...props} />
        ))}
      </Box>
    </Flex>
  );
};

export default ClusterWrapper;
