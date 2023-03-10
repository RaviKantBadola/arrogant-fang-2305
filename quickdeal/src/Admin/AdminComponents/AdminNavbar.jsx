import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

import { Link as Routerlink } from "react-router-dom";
import React from "react";
const Links = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Add Products", path: "/admin/add" },
  { name: "Users", path: "/admin/users" },
];

const NavLink = ({ children, path }) => (
  <Routerlink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={path}
  >
    {children}
  </Routerlink>
);

function AdminNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      localStorage.setItem("search_term", e.target.value);
      navigate("/admin/search");
    }
  };
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        style={{ position: "sticky", top: "0px", zIndex: 100 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
           
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((e) => (
                <NavLink key={e.name} path={e.path}>
                  {e.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {location.pathname !== "/admin/search" ? (
            <InputGroup maxW={"60%"} display={{ base: "none", md: "flex" }}>
              <InputLeftElement
                pointerEvents="none"
                children={<HiMagnifyingGlass />}
              />
              <Input type="text" bg="white" onKeyDown={handleSearch} />
            </InputGroup>
          ) : null}

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Routerlink to="/">Logout</Routerlink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((e) => (
                <NavLink key={`${e.name}mobile`} path={e.path}>
                  {e.name}
                </NavLink>
              ))}
            </Stack>
            {location.pathname !== "/admin/search" ? (
              <InputGroup maxW={"60%"}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<HiMagnifyingGlass />}
                />
                <Input type="text" bg="white" onKeyDown={handleSearch} />
              </InputGroup>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default AdminNav;
