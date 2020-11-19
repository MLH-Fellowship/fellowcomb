import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

import {
  Flex,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

// const searchBar = ({ sendSearch }) => (

// );

const Header = (props) => {
  const [search, setSearch] = useState("");

  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("user");
  };

  const sendSearch = (event) => {
    alert(search);
  };

  const handleChange = (event) => setSearch(event.target.value);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as={ReactLink} to="/" size="lg" fontFamily="KoHo">
          <span role="img" aria-label="fellowcomb">
            🍯
          </span>{" "}
          fellowcomb
        </Heading>
      </Flex>

      <Flex
        mt={{ base: 4, md: 0 }}
        align="center"
        justifyContent="space-between"
      >
        {!props.isLoggedIn ? (
          <>
            {/* Search Bar */}
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Find People..."
                onChange={handleChange}
                focusBorderColor="yellow.500"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="md"
                  onClick={sendSearch}
                  colorScheme="yellow"
                  variant="outline"
                  border="0px"
                >
                  <span role="img" aria-label="search">
                    🔍
                  </span>
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              bg="transparent"
              variant="outline"
              border="0px"
              mx={6}
              onClick={() => signOut()}
              colorScheme="yellow"
            >
              Sign Out
            </Button>
          </>
        ) : (
          ""
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
