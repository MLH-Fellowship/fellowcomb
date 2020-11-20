import React, { useState, useEffect } from "react";

import { Button, Flex, Spinner, useToast, Link } from "@chakra-ui/react";
import { Link as ReactLink, Redirect } from "react-router-dom";
import { useParams } from "react-router";

import Discord from "../components/discord";

import { sendCode } from "../services/query";
import { getQueryParams } from "../utils/url";

import { useSetUser } from "../contexts/usercontext";

const CodeHandler = () => {
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    success: false,
    discord: false,
  });
  const { service } = useParams();
  console.log(service);
  const toast = useToast();
  const triggerToast = ({ title, description, status }) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 9000,
      isClosable: true,
    });
  };

  // const [toastMessage, setToastMessage] = useState(undefined);
  // const toast = useToast();

  // useEffect(() => {
  //   if (toastMessage) {
  //     const { title, body, status } = toastMessage;

  //     toast({
  //       title,
  //       description: body,
  //       status: status,
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   }
  // }, [toastMessage, toast]);

  const params = getQueryParams();
  const code = params.code;

  const setUser = useSetUser();
  useEffect(() => {
    sendCode(code, service)
      .then(async (response) => {
        if (response.status === 200 && service === "github") {
          window.localStorage.setItem("userId", response.data);
          setUser(() => response.data);
          setState((state) => ({
            ...state,
            isLoading: false,
            error: false,
            success: true,
          }));
        } else if (service === "github") {
          setState((state) => ({
            ...state,
            error: true,
            isLoading: false,
          }));
        } else if (response.status === 200 && service === "discord") {
          setState((state) => ({
            ...state,
            error: false,
            isLoading: false,
            discord: true,
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

  const { error, isLoading, success, discord } = state;

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      height="80vh"
    >
      {discord ? <Redirect to="/" /> : ""}
      {error
        ? triggerToast({
            title: "An error has occurred! 💔",
            description: "Could not connect account with GitHub.",
            status: "error",
          })
        : ""}
      {success
        ? triggerToast({
            title: "You're in! 🎉",
            description: "Enjoy your stay at fellowcomb.",
            status: "success",
          })
        : ""}
      {isLoading ? (
        <Spinner size="xl" speed="0.50s" color="yellow.500" />
      ) : success ? (
        <Discord />
      ) : (
        <Link style={{ textDecoration: "none" }} as={ReactLink} to="/">
          <Button colorScheme="yellow">Try Again!</Button>
        </Link>
      )}
    </Flex>
  );
};

export default CodeHandler;
