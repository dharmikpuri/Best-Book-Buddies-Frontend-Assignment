import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react"
import Profile from "../../assets/profile.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CodeDesign = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  // You can also pass an optional settings object
  // below listed default settings
 
  return (
    <Box className="mainHeight" position={"relative"} maxW={"75rem"} margin={"auto"} py={"3rem"} px={"0.5rem"} mt={"5rem"} data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <Box mt={"2rem"} mb={"2rem"}>
        <Divider bg="gray.700" />
      </Box>
      <Box background={"#080A0B"} width={{ base: "100%", md: "85%" }} minH={"30rem"} borderRadius={"1rem"} color={"#FFF"} p={"1rem"}>
        <pre>
          Hello From Dharmik Puri Goswami
        </pre>
      </Box>


      <Box className="scrollfunctionality responsivefunctionality" display={"flex"} flexDirection={"column"} gap={"2rem"} position={"absolute"} >

        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"#FFF"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>

        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"white"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>

        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"white"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>


        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"white"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>

        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"white"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>

        <Box background={"white"} borderRadius={"0.8rem"} padding={"1.5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
          <Box >
            <Image src={Profile} />
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"1.3rem"}>Megan Fisher</Text>
            <Text color={"gray"}>Engineering Manager</Text>
          </Box>

          <Flex gap={"1rem"} mt={"2rem"}>
            <Button background={"#0284FE"} color={"white"} borderRadius={"2rem"} _hover={{
              bg: " #0284FE",
              boxShadow: "0 0 20px 5px #127de1"
            }}>Follow</Button>
            <Button background={"white"} borderRadius={"2rem"} border={"1px solid gray"} _hover={{
              bg: " #FFF",
              boxShadow: "0 0 20px 5px #cfcaca"
            }}>Message</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default CodeDesign