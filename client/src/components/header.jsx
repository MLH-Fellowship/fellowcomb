import React, { useState } from "react";
import { Link as ReactLink, redirect } from "react-router-dom";

import {
  Flex,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  Avatar,
} from "@chakra-ui/react";

import Honeycomb from "../assets/Honeycomb.png";

const dummyResult = [
  { id: "jcs98", name: "Jainam Shah", pfp: "", color: "tomato" },
  { id: "flozender", name: "Tayeeb Flozender", pfp: "", color: "teal.500" },
  { id: "utkarsh867", name: "Utkarsh Goel", pfp: "", color: "orange.600" },
];

const SearchResultItem = ({ user, onClose }) => {
  const { id, name, color } = user;
  return (
    <>
      <Divider />
      <ReactLink to={`/users/${id}`} onClick={onClose}>
        <Flex direction="row" align="center" p="4">
          <Avatar mr="4" background={color} />
          {/* <Flex direction="row"> */}
          <Text fontSize="lg" color="black">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500" ml="2">
            ({id})
          </Text>
          {/* </Flex> */}
        </Flex>
      </ReactLink>
    </>
  );
};

const Header = (props) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("user");
  };

  const sendSearch = (event) => {
    // TODO make the search request
    // set result and open modal on success
    setSearchResult(dummyResult);
    onOpen();
  };

  const handleChange = (event) => setSearch(event.target.value);
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        {...props}
      >
        <Flex align="center" mr={5}>
          <ReactLink to="/">
            <Image src={Honeycomb} width="38px" px="3px" mx="4px" />
          </ReactLink>
          <Heading as={ReactLink} to="/" size="xl" fontFamily="KoHo">
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search results for "{search}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {searchResult.map((user) => (
              <SearchResultItem user={user} onClose={onClose} />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
