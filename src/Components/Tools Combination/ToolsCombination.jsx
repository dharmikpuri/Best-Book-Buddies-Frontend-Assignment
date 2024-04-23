import { Box, Divider, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import diamond from "../../assets/diamond.svg"
import react from "../../assets/image fill.svg"
import arroww from "../../assets/arrow.png"


const ToolsCombination = () => {
  let data = [
    {
      image: diamond,
      heading: "Design",
      desc: "Design your website by using Atomize for Sketch App.",
      see: "Design Resources"
    },
    {
      image: react,
      heading: "Development",
      desc: "Bring your design to life with Atomize for React JS.",
      see: "Documentation"
    },
  ]
  return (
    <Box w={"90%"} m={"auto"} mt={"5rem"}>
      <Box mt={"2rem"} mb={"2rem"}>
        <Divider bg="gray.700" />
      </Box>
      <Text fontWeight={500} fontSize={{ base: "2.2rem", md: "2rem", lg: "2.25rem" }} fontFamily={"Roboto"} color={"#000000"} mb={{ base: "0.5rem", md: "1rem", lg: "0.75rem" }} textAlign={"center"} w={{ md: "90%", lg: "70%" }} m={"auto"}>A combination of tools to design and develop modern applications at ease.</Text>


      <SimpleGrid columns={{ base: "1", md: "2" }} gap={"1.5rem"} mt={"3rem"} justifyContent={"center"} display={{ base: "block", md: "flex" }}>
        {data.map((el, index) => (
          <Box key={index} py={"2.5rem"} px={"1.5rem"} boxShadow={"rgba(51, 51, 51, 0.24) 0px 3px 5px;"} borderRadius={"0.5rem"} mb={{ base: "2rem", md: "0rem" }}>
            <Image src={el.image} alt={el.heading} mb={"1.5rem"} />

            <Text mb={"0.75rem"} fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000"}>{el.heading}</Text>

            <Text mb={"2rem"} fontWeight={400} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }} fontFamily={"Roboto"} color={"#000"}>{el.desc}</Text>

            <Box display={"flex"} cursor={"pointer"}>
              <Text fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }} fontFamily={"Roboto"} color={"#0284fe"}
              >{el.see}  </Text>
              <Image src={arroww} ml={"0.5rem"} />
            </Box>

          </Box>
        ))}
      </SimpleGrid>

    </Box>
  )
}

export default ToolsCombination