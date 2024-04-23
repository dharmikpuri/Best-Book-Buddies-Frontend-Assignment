import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import gitHub from "../../assets/gitHub.svg"
import be from "../../assets/Be.png"
import ball from "../../assets/ball.svg"
import twitter from "../../assets/twitter.svg"
import linkdIn from "../../assets/linkdIn.svg"

const Footer = () => {
  return (
    <Box w={"90%"} m={"auto"}>
      <Box display={{base:"none",md:"flex",lg:"flex"}} justifyContent={"space-between"} >
        {/* BOX 1  */}
        <Box>
          <Text mb={"0.5rem"} fontWeight={700} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000"}>Docs</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Installation</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Theme Setup</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Grid</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Atoms</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Molecules</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Functions</Text>



        </Box>

        {/* BOX 2 */}
        <Box>
          <Text mb={"0.5rem"} fontWeight={700} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000"} >Atomize</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Features</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Design</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Development</Text>

        </Box>

        {/* BOX 3 */}
        <Box>
          <Text mb={"0.5rem"} fontWeight={700} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000"} >Resources</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Sketch File</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Github</Text>

        </Box>

        {/* BOX 4 */}
        <Box>
          <Text mb={"0.5rem"} fontWeight={700} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontFamily={"Roboto"} color={"#000"} >Extras</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Blog</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Need Help?</Text>

          <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(80, 82, 86, 1)"} >Give Feedback</Text>

        </Box>
      </Box>

      {/* BOX FOR SOCIAL MEDIA  */}
      <Box mt={"3rem"}>
        <Text mb={"0.5rem"} fontWeight={400} fontSize={"1rem"} fontFamily={"Roboto"} color={"rgba(0, 0, 0, 1)"} textAlign={"center"}>Designed & Developed by Dharmik Puri Goswami</Text>

        <Box display={"flex"} w={{base:"70%",md:"20%"}} m={"auto"} justifyContent={"space-evenly"} mt={"1rem"}>
          <Image src={gitHub} alt='github' w={"1.2rem"} h={"1.2rem"}/>
          <Image src={be} alt='Be' w={"1.2rem"} h={"1.2rem"}/>
          <Image src={ball} alt='ball' w={"1.2rem"} h={"1.2rem"}/>
          <Image src={twitter} alt='gitwitterthub' w={"1.2rem"} h={"1.2rem"}/>
          <Image src={linkdIn} alt='linkdIn' w={"1.2rem"} h={"1.2rem"}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer