import logo from "../../Images/Meat-hub-logo.jpg";
import Searchbox from "./Searchbox.jsx";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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
    href={"#"}
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
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
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
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>Dashboras</NavLink>
              <Searchbox />
              <Categories />
            </HStack>
          </HStack>
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
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
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

      <Box pt={20} bg="green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus
        soluta laudantium natus consequatur facere error maiores consectetur
        ipsam quia. Et ipsam est atque assumenda error itaque vel. Maxime magni,
        vero rem beatae architecto nostrum asperiores libero ducimus minus rerum
        dignissimos quibusdam iste vitae repellat! Rerum optio beatae sed porro
        quia cumque quo, expedita accusantium laboriosam harum illo a. Quibusdam
        consequuntur veniam, magni sint fuga magnam provident cum nulla numquam
        dolor quasi ab sit, ex modi est veritatis eius, et quos aut tempore
        vitae aspernatur perferendis. Nostrum nemo odio earum praesentium
        placeat unde iste hic in a iure maxime tempore provident quod optio,
        excepturi esse aliquid adipisci numquam at mollitia? Deleniti vel maxime
        ipsum eligendi quibusdam! Tempore animi temporibus enim cupiditate totam
        magnam optio odio maxime laborum incidunt. Eligendi odio fuga
        accusantium ducimus. Eos, porro quae suscipit delectus harum
        exercitationem obcaecati, minus voluptatum doloremque, recusandae
        voluptate unde hic ullam! Eaque assumenda dignissimos dolorum quaerat
        laudantium minima mollitia quia odio error consequatur, deserunt
        voluptatibus, vel asperiores veniam temporibus pariatur, eos consectetur
        tenetur enim molestiae voluptates quidem sint nam ipsa? Atque eos,
        consequatur ad molestias esse numquam saepe facilis? Modi molestiae
        asperiores nihil rem quasi quam ex corrupti placeat, praesentium numquam
        in voluptas iusto itaque nulla maxime. Aliquam eos nam, amet ad velit,
        officiis excepturi tempore, laudantium reiciendis dolor placeat
        consectetur deleniti minus dicta nihil. Laudantium veritatis tempore
        deleniti vitae provident cupiditate odio iste obcaecati quos perferendis
        ducimus aliquid necessitatibus, neque facilis eaque ad voluptas,
        voluptates ipsam saepe maxime non commodi! Fugit omnis explicabo
        accusantium, voluptates praesentium ex sequi cumque enim modi a dolores
        quaerat tempore unde aliquam debitis cum quos similique vel nulla qui
        autem. Adipisci, pariatur fugit facilis hic aut quam molestias, laborum
        rerum dolorum magni iure! Doloremque nam iste similique exercitationem,
        asperiores veniam fugit accusamus maiores fuga impedit a sunt debitis,
        nihil illum reiciendis, eaque voluptate. Temporibus minima possimus id
        totam sapiente aut itaque cumque nemo porro assumenda iure blanditiis
        vel, repudiandae libero eligendi impedit soluta? Itaque id ducimus
        commodi, animi, dolores incidunt ut reprehenderit temporibus consequatur
        laboriosam aperiam esse veniam vitae, eveniet molestiae qui? Possimus,
        aliquid perspiciatis! Dolores similique atque eaque! Repudiandae ratione
        dicta dolores, ipsa vel ad aperiam consectetur veniam consequuntur nulla
        labore provident magni aspernatur possimus voluptas non architecto,
        expedita eveniet molestias nesciunt cumque vero atque nisi autem.
        Numquam odit repellendus aperiam sunt corporis eum accusantium illum
        aspernatur incidunt ut, repellat consequatur quas esse non voluptatem
        tenetur enim cupiditate alias iure. Assumenda exercitationem, natus a
        dicta incidunt illum iste asperiores veniam, reprehenderit, quas sunt
        corrupti dolorum distinctio minima. Cum amet voluptate, pariatur
        accusamus obcaecati neque, quia temporibus perspiciatis laboriosam
        ducimus nam. Blanditiis nulla, perferendis ullam magnam nam recusandae
        aperiam exercitationem harum aspernatur. Quod deleniti est illo
        similique assumenda, voluptatum repellat esse quas temporibus
        voluptatibus error libero nemo facilis laboriosam tempore blanditiis
        quo. Laborum nesciunt exercitationem eos magni quasi, blanditiis
        molestias soluta, animi nostrum, fuga molestiae cupiditate sint eligendi
        doloribus ducimus praesentium omnis laudantium repudiandae unde numquam
        maxime corporis. Perferendis aperiam consequatur totam, eligendi
        inventore dolorum consectetur assumenda magnam ipsa eos molestias aut,
        soluta quas deserunt cumque. Id voluptas ipsa dolores repellat saepe
        recusandae eum, in perferendis corrupti, dolorem quaerat aliquid at
        beatae. Eius aliquid laboriosam voluptatibus numquam rem facere
        cupiditate tenetur deleniti error quidem quasi veniam, nostrum
        voluptates sapiente quam voluptatem repellendus ullam quisquam
        distinctio laudantium sed iure in minus molestias! Impedit est, rerum,
        similique pariatur, asperiores eos dignissimos quidem maxime rem
        deleniti inventore nesciunt quia aliquam ut soluta accusantium totam.
        Voluptatibus laudantium hic excepturi ratione veritatis ducimus eligendi
        impedit architecto dolorem corrupti cum, inventore laborum, unde
        doloremque aut dicta sed rerum saepe! Culpa, velit quisquam. Ducimus
        provident sapiente ab dolores accusantium debitis earum assumenda
        quaerat odit, nesciunt deserunt ex impedit alias at aspernatur inventore
        ullam id, placeat expedita perspiciatis doloribus non? Explicabo iure
        nam fuga eum assumenda, excepturi libero cum incidunt modi blanditiis
        qui alias at eligendi. Possimus veniam quod et ipsum illo omnis aliquam
        quo atque harum modi accusantium temporibus, dignissimos mollitia
        corrupti facere aperiam iure quia ipsa aspernatur eius explicabo quis
        eos. Nihil veniam impedit, rem nesciunt officia reprehenderit nemo
        beatae numquam est, repellendus, aut sequi labore minima a minus
        aliquid. Animi error ut perferendis odio laborum sunt, culpa ullam,
        dolorum porro ipsum aliquam nisi unde blanditiis soluta nihil iste?
        Voluptatum incidunt fuga iusto dolorem nesciunt, iste architecto
        temporibus unde quae aut. Dolores sint, similique sunt cum omnis
        distinctio corrupti voluptatem aliquid quasi! Minima reprehenderit animi
        nesciunt. Voluptates ex rem possimus consequuntur vitae non, rerum
        eligendi asperiores, laudantium, fugiat voluptatem praesentium dolore.
        Maiores amet itaque nam vitae! Quae in odit accusamus deleniti natus
        obcaecati id quasi et distinctio. Vero, suscipit odit tempora incidunt
        ipsum, explicabo totam corporis nihil voluptates ipsa rerum officiis?
        Ducimus cupiditate maxime beatae vero vitae tempora quibusdam quasi
        animi consequatur nostrum dolor aperiam repudiandae, possimus nam quos
        illum. Accusamus recusandae fuga dolorem. Non eligendi quasi dignissimos
        excepturi unde facere accusamus quae vero omnis, laborum et modi
        provident ipsa praesentium aliquid saepe numquam eveniet harum expedita
        suscipit ullam deserunt! Voluptatem nostrum, odit accusantium nisi
        perspiciatis distinctio laudantium quisquam dolores. Dicta aspernatur
        hic, amet ratione modi est quisquam sit eligendi perspiciatis inventore
        labore ad minus. Tempora a sequi delectus hic ea necessitatibus, beatae
        aut molestiae aspernatur, perspiciatis vitae tenetur aliquam aliquid
        molestias explicabo maxime, voluptas omnis soluta? Debitis autem ducimus
        ullam rerum facilis delectus id, itaque exercitationem praesentium rem
        quidem veniam aperiam! Repudiandae, aut accusantium! Sit repellendus
        quis dolorem harum corporis dolores libero voluptas sapiente expedita
        aliquam, eligendi sint. Non aperiam quos repudiandae deserunt, dolores
        rem quaerat? Vitae voluptas fugiat quidem hic accusantium eligendi
        consectetur suscipit enim praesentium animi eaque in esse quasi dicta
        numquam maxime incidunt sunt natus similique at soluta magni eveniet,
        veritatis voluptatem. Ipsum aspernatur quae nostrum fugit quibusdam,
        temporibus optio vero, odit, odio mollitia magnam ea ratione aperiam
        praesentium nobis! Ea consectetur modi culpa amet necessitatibus, quae,
        possimus fugiat placeat deserunt delectus natus doloribus iusto qui
        dicta adipisci voluptas omnis veniam cumque repudiandae perferendis
        dolorem! Magni optio ratione temporibus alias molestias sint expedita
        quam itaque dignissimos, blanditiis quae.
      </Box>
    </>
  );
}

// import React from "react";
// import logo from "../../Images/Meat-hub-logo.jpg";
// import navStyle from "./navbar.module.css";
// import Searchbar from "../../Searchbar/Searchbar";

// const Navbar = () => {
//   return (
//     <>
//       <div></div>
//       {/*
//       <div className={}>
//           <div>
//             <img src={logo} className={navStyle.navlogo} alt="meat-hub-logo" />
//           </div>
//           <div>
//             <div className={navStyle.img_nav}>
//               <img
//                 src="https://www.licious.in/img/rebranding/location_icon.svg"
//                 alt="location icon"
//               />
//             </div>
//             <div><Map /></div>
//             </div>
//           <div className={navStyle.search_bar}>
//             <Searchbar />
//           </div>
//           <div>
//             <div className={navStyle.img_nav}>
//               <img
//                 src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
//                 alt=""
//               />
//             </div>
//             <div><Categories /></div>
//           </div>
//           <div>
//             <div>
//               <img
//                 src="https://www.licious.in/img/rebranding/profile_icon.svg"
//                 alt=""
//               />
//             </div>
//             <div><Profile_Login /></div>
//           </div>
//           <div>
//             <div>
//               <img
//                 src="https://www.licious.in/img/rebranding/cart_icon.svg"
//                 alt=""
//               />
//             </div>
//             <div><Cart /></div>
//             <div><CartCounter /></div>
//           </div>
//         </div>
//        */}
//     </>
//   );
// };

// export default Navbar;
