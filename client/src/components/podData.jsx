import React from "react";
import { Flex, Divider, Grid, GridItem } from "@chakra-ui/react";
import Cluster from "../components/cluster";

const PodData = ({ podLeaders, mentors }) => {
  if (!(podLeaders.length || mentors.length)) {
    return <></>;
  }

  return (
    <Grid templateColumns={["auto", "auto", "auto 1fr"]}>
      <GridItem>
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
      </GridItem>
      <GridItem>
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
      </GridItem>
    </Grid>
  );
};

export default PodData;
