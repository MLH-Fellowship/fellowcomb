import React from "react";
import { Heading, Image } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Image src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" />
      <Heading size="4xl">404</Heading>
      <Heading size="lg" my="4vh">
        Page not found!
      </Heading>
    </>
  );
};

export default ErrorPage;
