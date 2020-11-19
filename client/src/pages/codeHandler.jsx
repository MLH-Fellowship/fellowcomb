import React, { useState, useEffect } from "react";

import { Button, Flex, Spinner, useToast, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import { sendCode } from "../services/query";
import { getQueryParams } from "../utils/url";

const CodeHandler = () => {
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    success: false,
  });

  const toast = useToast();
  const triggerToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
    });
  };

  const params = getQueryParams();
  const code = params.code;
  let accounts_server = params["accounts-server"];
  accounts_server = decodeURI(accounts_server);

  useEffect(() => {
    sendCode(code, accounts_server)
      .then(async (response) => {
        if (response.status === 200) {
          setState((state) => ({
            ...state,
            isLoading: false,
            error: false,
            success: true,
          }));
        } else {
          setState((state) => ({
            ...state,
            error: true,
            isLoading: false,
          }));
        }
      })
      .catch(() => {
        setState((state) => ({
          ...state,
          error: true,
          isLoading: false,
        }));
      });
  }, [code, accounts_server]);

  const { error, isLoading, success } = state;

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="80vh"
    >
      {error
        ? triggerToast(
            "An error has occurred",
            "Could not connect account with GitHub",
            "error"
          )
        : ""}
      {success
        ? triggerToast(
            "Account connected successfully!",
            "Enjoy your stay at fellowcomb :)",
            "success"
          )
        : ""}
      {isLoading ? (
        <Spinner size="xl" speed="0.50s" color="yellow.500" />
      ) : success ? (
        "DISCORD"
      ) : (
        <Link style={{ textDecoration: "none" }} as={ReactLink} to="/">
          <Button colorScheme="yellow">Try Again!</Button>
        </Link>
      )}
    </Flex>
  );
};

export default CodeHandler;
