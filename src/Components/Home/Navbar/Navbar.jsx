import logo from "../../Images/Meat-hub-logo.jpg";
import Searchbox from "./Searchbox.jsx";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Categories from "./Categories";

// const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#fff", "gray.900")}
        px={4}
        position="fixed"
        width={"100vw"}
        zIndex={1600}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-around"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w={40}>
              <img src={logo} alt="meat-hub-logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={16}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>Location</NavLink>
              <Searchbox />
              <Categories />
              <Login />
              <Cart />
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Menu>
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
                <MenuItem>Profile</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem>Order</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink>Dashborad</NavLink>
              <NavLink>Dashborad</NavLink>
              <NavLink>Dashborad</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
