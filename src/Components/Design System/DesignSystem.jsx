import { Box, Button, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import videoPlay from "../../assets/videoPlay.png"
const DesignSystem = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={"10rem"} mb={"3rem"}>
      <Text fontWeight={500} fontSize={{base:"2.8rem",md:"3.25rem",lg:"3.5rem"}} fontFamily={"Roboto"} textAlign={"center"} color={"#000000"} mb={{base:"0.5rem",md:"1rem",lg:"0rem"}}>Design System for React JS</Text>

      <Text fontWeight={400} fontSize={{base:"1rem",md:"1.25rem",lg:"1.1rem"}} fontFamily={"Roboto"} textAlign={"center"} lineHeight={"2rem"} color={"#505256"} w={{base:"90%",md:"80%",lg:"45%"}} m={"auto"}>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</Text>

      <Box display={"flex"} justifyContent={"space-evenly"} w={{base:"90%",md:"50%",lg:"30%"}} m={"auto"} mt={"2rem"} flexDir={{base:"column",md:"row"}} gap={"1rem"}>
        <Button bg={"#0284FE"} color={"#FFF"} py={"1.5rem"} px={"2rem"} borderRadius={"0.5rem"}>Get Started Now</Button>

        <Button border={"1px solid #d4d7da"} p={"12px, 36.25px, 12px, 36px"} borderRadius={"0.5rem"} color={"#505256"} py={"1.5rem"} px={"2rem"} bg={"#FFF"}>Watch Now</Button>
      </Box>
    </Box>
  )
}

export default DesignSystem