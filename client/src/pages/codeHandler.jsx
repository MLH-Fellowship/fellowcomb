import React, { useState, useEffect } from "react";

import { Button, Flex, Spinner, useToast, Link } from "@chakra-ui/react";
import { Link as ReactLink, Redirect } from "react-router-dom";
import { useParams } from "react-router";

import { sendCode } from "../services/query";
import { getQueryParams } from "../utils/url";

import { useSetUser, useUser } from "../contexts/usercontext";

const CodeHandler = () => {
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    success: false,
  });
  const { service } = useParams();
  const userId = useUser();
  const toast = useToast();
  const triggerToast = ({ title, description, status }) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  const params = getQueryParams();
  const code = params.code;

  const setUser = useSetUser();
  useEffect(() => {
    sendCode(code, service, userId)
      .then(async (response) => {
        if (response.status === 200) {
          window.localStorage.setItem("userId", response.data.userId);
          setUser(() => response.data.userId);
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
  }, [code]);

  const { error, isLoading, success, discord, newUser } = state;

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="80vh"
    >
      {error
        ? triggerToast({
            title: "An error has occurred! 💔",
            description: "Could not connect with your account.",
            status: "error",
          })
        : ""}
      {success
        ? triggerToast({
            title: "Success! 🎉",
            description: "Account successfully linked.",
            status: "success",
          })
        : ""}
      {isLoading ? (
        <Spinner size="xl" speed="0.50s" color="yellow.500" />
      ) : success ? (
        <Redirect to="/" />
      ) : (
        <Link style={{ textDecoration: "none" }} as={ReactLink} to="/">
          <Button colorScheme="yellow">Try Again!</Button>
        </Link>
      )}
    </Flex>
  );
};

export default CodeHandler;
