import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SVG from "../../assets/SVG.png"
const UITemplates = () => {
  return (
    <Box w={{base:"100%",md:"90%",lg:"90%"}} m={"auto"} mt={"5rem"}>

      <Flex borderRadius={{base:"none",md:"3rem"}} py={"2rem"} px={"3rem"} bg={"rgba(247, 248, 249, 1)"} justifyContent={"space-between"} flexDir={{base:"column",md:"column",lg:"row"}}>
        {/* FLEX BOX 1  */}
        <Box>
          <Text fontWeight={500} fontSize={{ base: "1.75rem", md: "2rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000000"} mb={{base:"0.5rem",md:"0.5rem",lg:"0rem"}}>UI Templates are on their way 🚀</Text>

          <Text fontWeight={400} fontSize={{ base: "1rem", md: "1.1rem", lg: "1rem" }} fontFamily={"Roboto"} color={"#505256"} mb={{ base: "1.5rem", md: "1rem", lg: "0rem" }}>Official UI Templates build on Atomize React will be released very soon.</Text>
        </Box>

        {/* FLEX BOX 2 */}
        <Box display={"flex"} alignItems={"center"}>
        <Button bg={"rgba(0, 0, 0, 1)"} color={"#FFF"} py={"0.75rem"} px={"1.25rem"} borderRadius={"2rem"} _hover={{
          bg: " rgba(0, 0, 0, 1)",
          boxShadow: "0 0 20px 5px #1e1d1d"
        }}>
          Get notified <Image src={SVG} ml={"1rem"}/>
        </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default UITemplates