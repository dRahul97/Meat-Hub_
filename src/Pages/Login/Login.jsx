import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div ref={btnRef} className="nav-sec-btn" onClick={onOpen}>
        Login
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundImage="url('https://www.licious.in/image/rebranding/jpg/user-login-new.jpg')"
          backgroundSize="100% auto"
          backgroundRepeat="no-repeat"
        >
          <DrawerCloseButton color={"fff"} />

          <DrawerBody></DrawerBody>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            gap="20px"
            bg="#fff"
            w="95%"
            m="auto"
            h="300px"
            borderRadius={"6px"}
          >
            <Heading fontSize={"xl"} fontFamily={"Lato"}>
              Login
            </Heading>
            <Input placeholder="Email" w="90%" />
            <Input placeholder="Password" w="90%" />
            <Button bg="black" color="#fff">
              Sign In
            </Button>
          </Flex>
          <DrawerFooter>
            <Button color="#d11243" onClick={onClose}>
              <Link to="/register">Not a User? Register Here!</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
