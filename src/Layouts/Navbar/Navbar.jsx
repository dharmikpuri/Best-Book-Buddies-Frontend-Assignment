import React from 'react'
import Logo from "../../assets/logo.svg"
import { Box, Button, Flex, Image, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { Link } from "react-scroll"
import { useState } from 'react';
import { TbPhone } from "react-icons/tb"

const Navbar = () => {
  const navBarLists = [

    { to: "About Us", name: "Features" },
    { to: "Training Programs", name: "Github" },
    { to: "Placements", name: "For Designers" },

  ];
  const { isOpen, onToggle } = useDisclosure();
  const [isOpenn, setIsOpen] = React.useState(false);

  return (
    <Box as="nav" w="100%" position={"fixed"} transform={"translate(-50%,-50%)"} left={"50%"} top={{ base: "5%", md: "5%", lg: "4%" }} backgroundRepeat={"no-repeat"} borderRadius={"0.5rem"} zIndex={100} justifyContent={"space-between"}
      px={"1.5rem"} maxW={"1600px"} m={'auto'} backdropFilter={"blur(15px)"}>

      <Flex fontFamily={"Outfit"} justifyContent={"space-between"} alignItems={"center"}
        px={4}>
        <Flex alignItems={"center"} gap={{ base: "", md: "", lg: "24px" }} >
          <a href='#hero'>
            <Image src={Logo} alt="mProfessional Logo" w={{ base: "150px", md: "auto" }} h={{ base: "40px", md: "auto" }} />
          </a>
        </Flex>

        {/* Hamburger Menu Button for Small Screens */}
        {/* <Text border={"2px solid red"}>Abc</Text> */}
        <IconButton
          display={{ base: "block", md: "block", lg: 'none', xl: "none" }}
          onClick={onToggle}
          icon={isOpen ? <HiOutlineX size="2rem" color="#000" className='shadow' /> : <HiOutlineMenu size="2rem" color="#000" />}
          aria-label="Toggle Menu"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
          right={5}
          position={"absolute"}
        />

        {/* Full Menu for Medium and Larger Screens */}
        <Flex
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="1.75rem"
          fontWeight={400}
          fontSize={"1.125rem"}
          color={"#FFF"}
          fontFamily={"Outfit"}

        >
          {navBarLists.map(({ to, name, targett }, i) => {
            return (
              // <a href={to} target={targett}>
              <Box key={i}>
                <Text color={"rgba(80, 82, 86, 1)"} fontFamily={"Roboto"} fontSize={"1.1rem"} fontWeight={500} cursor={"pointer"} pos={"relative"}>
                  {name}
                </Text>

              </Box>



            );
          })}
          <Button
            display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            bg={"rgba(241, 242, 244, 1)"}
            fontSize={"1rem"}
            textAlign={"center"}
            color={"#000000"}
            fontFamily={"Roboto"}
            fontWeight={500}
            fontStyle={"normal"}
            borderRadius={"0.5rem;"}
            px={"1rem"}
            py={"0.5rem"}
            // pos={"absolute"}
            right={"-0.01188rem"}
            left={"-0.03125rem"}
            _hover={{
              bg: " rgba(241, 242, 244, 1)",
              boxShadow: "0 0 20px 5px #f2ce3f"
            }}
            className='navContactBtn'
            gap={"0.5rem"}
          >
            Documentation
          </Button>


        </Flex>

      </Flex>

      {/* Responsive Menu for Small Screens */}
      <Box justifyContent={"space-between"} display={"flex"}>
        <Flex
          position={"absolute"} right={"4px"} top={"1rem"}
          flexDir="column"
          display={isOpen ? { base: "flex", md: "flex", lg: "none", xl: "none" } : "none"}
          mt={isOpen ? "24px" : "0"}
          pt={isOpen ? "24px" : "0"}
          pb={isOpen ? "30px" : "0"}
          lineHeight={"3rem"}
          zIndex={101}
          border={"1px solid rgba(80, 82, 86, 1)"}
          w={"96%"}
          // m={"auto"}
          h={"250px"}
          borderRadius={"12px"}
          // color={"#84878b"}
          bg={"#313234"}
          px={"1rem"}
        >
          {navBarLists.map(({ to, name, targett }, i) => {
            return (
              <Box key={i}>
                <Text w="100%" fontSize={{ base: "18px", md: "20px", lg: "20px", xl: "30px" }} color={"#8e9298"}>
                  {name}
                </Text>
              </Box>

            );
          })}

          <Button
            bg={"rgba(241, 242, 244, 1)"}
            fontSize={"1.25rem"}
            // textAlign={"center"}
            color={"#000"}
            fontFamily={"Roboto"}
            fontWeight={500}
            display={"flex"}
            // justifyContent={"center"}
            borderRadius={"0.5rem"}
            px={"1.5rem"}
            py={"1.5rem"}
            mt={"1.2rem"}
            w={"80%"}
            // m={"auto"}
            _hover={{
              bg: " rgba(241, 242, 244, 1)",
              boxShadow: "0 0 20px 5px #f2ce3f"
            }}
          >
            Documentation
          </Button>

        </Flex>
      </Box>
    </Box>
  )
}

export default Navbar