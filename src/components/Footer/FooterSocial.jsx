// import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  // VisuallyHidden,
  // chakra,
  useColorModeValue,
  Image,
  Flex,
  VStack,
  HStack,
  FormLabel,
} from "@chakra-ui/react";

import navLogo from "../../Assets/Meat-hub-logo.jpg";

export default function FooterSocial() {
  return (
    <Box bg="#fff" color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} p={"20px"} spacing="6px">
        <HStack>
          <Image src={navLogo} w="180px" p="10px" ml="-16px" />
          <Box
            borderTopWidth={1}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderStyle={"solid"}
            w="90%"
          ></Box>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={2}
          //   border={"1px solid"}
        >
          <Stack w="100%" spacing={4} p={"5px 0"}>
            <FormLabel fontSize={"14px"} fontWeight={"bold"}>
              EXPERIENCE LICIOUS APP ON MOBILE
            </FormLabel>

            <Image
              src="https://www.licious.in/image/rebranding/png/app-store-homepage.png"
              w="48%"
            />
            <Image
              src="https://www.licious.in/image/rebranding/png/playstore-homepage.png"
              w="48%"
            />

            <VStack
              align={"flex-start"}
              direction={"row"}
              spacing={6}
              pt="10px"
            >
              <Text textAlign={"left"} fontSize="0.9rem" fontWeight={"bold"}>
                KEEP IN TOUCH
              </Text>
              <HStack spacing={4}>
                <Image src="https://www.licious.in/image/rebranding/png/twitter-homepage.png" />
                <Image src="https://www.licious.in/image/rebranding/png/fb-homepage.png" />
                <Image src="https://www.licious.in/image/rebranding/png/insta-homepage.png" />
              </HStack>
            </VStack>
          </Stack>

          <Stack
            // border="1px solid"
            w="100%"
            spacing={2}
            fontSize={"0.8rem"}
            p="20px 10px"
          >
            <Link fontSize="0.9rem" fontWeight={"bold"}>
              USEFUL LINKS
            </Link>

            <Link href={"#"}>Why Licious?</Link>
            <Link href={"#"}>Refer & Earn</Link>
            <Link href={"#"}>Licious Cash & Cash+</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>BLOG</Link>
          </Stack>

          <Flex
            // border="1px solid"
            w="100%"
            spacing={2}
            fontSize={"0.8rem"}
            flexDirection={"column"}
            p="10px"
            color={"#111111"}
          >
            <Link> .</Link>
            <Link href={"#"}> About Us</Link>
            <Link href={"#"}>Bug Bounty Guideline</Link>
            <Link href={"#"}>T&C</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>FSSC 22000 Certification</Link>
            <Link href={"#"}>SA8000 Certification</Link>
            <Link href={"#"}>Sitemap</Link>
          </Flex>

          <Stack
            // border="1px solid"
            w="100%"
            spacing={2}
            fontSize={"0.8rem"}
            p="10px"
          >
            <Link fontSize="0.9rem" fontWeight={"bold"}>
              CONTACT US
            </Link>
            <Link href={"#"}>Call: 1800-4190-786</Link>
            <Link href={"#"}>talktous@licious.com</Link>
            <Link href={"#"}>
              REGISTERED OFFICE ADDRESS: <br />
              House of Licious, Zed Pearl, No 12, Domlur Layout Bangalore,
              Karnataka - 560071
            </Link>
            <HStack w="70%" p={"20px 0"}>
              <Image src="https://www.licious.in/image/rebranding/png/3-dsecure.png" />
            </HStack>
            <Link fontSize="0.8rem" fontWeight={"bold"} p="10px 0">
              HAVE SECURITY CONCERN?
              <br />
              Mail us to: security@licious.com
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* <Box
        // borderTopWidth={1}
        // borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        // border="1px solid"
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
        </Container>
      </Box> */}
    </Box>
  );
}
