import { Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import DIV from "../../assets/div.svg"
import Atomic from "../../assets/atomic.svg"
import ThemeSetup from "../../assets/themeSetUp.svg"
import Components from "../../assets/components.svg"
import Responsive from "../../assets/responsive2.svg"
import Customisation from "../../assets/customisation.svg"
import IconSytem from "../../assets/iconSystem.svg"


const BeautifulUI = () => {
  let data = [
    {
      img: Atomic,
      heading: 'Atomic',
      desc: "Based on Atomic design",

    },
    {
      img: ThemeSetup,
      heading: 'Theme Setup',
      desc: "Auto updating colors and Styleguide.",

    },
    {
      img: Components,
      heading: 'Components',
      desc: "Ever-incresing list of components.",

    },
    {
      img: Responsive,
      heading: 'Responsive',
      desc: "Build fully responsive structures easily.",

    },
    {
      img: Customisation,
      heading: 'Customisation',
      desc: "Multiple customisations to suit your style",

    },
    {
      img: IconSytem,
      heading: 'Icon System',
      desc: "An inbuild icon system for faster development",

    },
  ]
  return (
    <Box w={"90%"} m={"auto"} mt={"5rem"}>
      <Box mt={"2rem"} mb={"2rem"}>
         <Divider  bg="gray.700" />
         </Box>
    <Box  display={"flex"} justifyContent={"space-between"} gap={"5rem"}>

      
      <Box display={{base:"none",md:"block"}}>
        <Image src={DIV} alt='img' />
      </Box>

      <Box>
        <Text mb={"1rem"} fontWeight={600} fontSize={{ base: "2.5rem", md: "2.5rem", lg: "3rem" }} fontFamily={"Roboto"} color={"#000"}>Beautiful & consistant UI powered with <Text as={"span"} color={"#06d7ff"}>React.</Text></Text>

        <SimpleGrid columns={{ base: "2", md: "2", lg: "3" }} gap={"2rem"} mt={"3rem"} >
          {data.map((el, index) => (
            <Box key={index}>
              <Image src={el.img} alt={el.heading} />
              <Text mb={"1rem"} fontWeight={600} fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} fontFamily={"Roboto"} color={"#000"} >
                {el.heading}
              </Text>

              <Text fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }} fontFamily={"Roboto"} color={"#505256"} >{el.desc}</Text>

            </Box>
          ))}
        </SimpleGrid>
      </Box>


    </Box>
    </Box>
  )
}

export default BeautifulUI