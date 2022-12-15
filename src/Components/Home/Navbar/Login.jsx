import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import navStyle from "../Navbar/navbar.module.css";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <div
        className={navStyle.login}
        style={{ width: "70px", display: "flex" }}
      >
        <img
          src="https://www.licious.in/img/rebranding/profile_icon.svg"
          alt="login"
        />
        <div className={navStyle.loginText} ref={btnRef} onClick={onOpen}>
          Login
        </div>
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

// const Login = () => {
//   return (
//     <div>
//
//     </div>
//   );
// };

export default Login;
