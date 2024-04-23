import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import CountUp from 'react-countup';
const Facilities = () => {
    const data = [
        {
            val: 15,
            desc: "Read to use the React Components"
        },
        {
            val: 60,
            desc: "Read to use the React Components"
        },
        {
            val: "</>",
            desc: "Detailed documentation for each component"
        },
        {
            val: "FREE",
            desc: "Open source with regular updates"
        },

    ]
    return (
        <Box w={"80%"} m={"auto"} mt={"5rem"}>
         <Box mt={"2rem"} mb={"2rem"}>
         <Divider  bg="gray.700" />
         </Box>

            {/* <CountUp end={100} duration={5} style={{color:"green"}}/> */}
            <SimpleGrid columns={{ base: "2", md: "2", lg: "4" }} gap={"2rem"} mt={"3rem"} >
                {data.map((el, index) => (
                    <Box key={index}>
                        <Text mb={"1rem"} fontWeight={700} fontSize={{ base: "1rem", md: "1rem", lg: "2.5rem" }} fontFamily={"Roboto"} color={"#000"} textAlign={"center"} >
                        {index == 0 || index == 1 ?<CountUp end={el.val} duration={10} suffix="+"/> : el.val}
                        </Text>

                        <Text fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }} fontFamily={"Roboto"} color={"#505256"} textAlign={"center"}>{el.desc}</Text>

                    </Box>
                ))}
            </SimpleGrid>
            
        </Box>
    )
}

export default Facilities