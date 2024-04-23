import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react"
import Profile from "../../assets/profile.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CodeDesign = () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
  return (
    <Box className="mainHeight" position={"relative"} maxW={"75rem"} margin={"auto"} py={"3rem"} px={"0.5rem"} mt={"5rem"} data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <Box mt={"2rem"} mb={"2rem"}>
        <Divider bg="gray.700" />
      </Box>
      <Box background={"#080A0B"} width={{ base: "100%", md: "85%" }} minH={"30rem"} borderRadius={"1rem"} color={"#FFF"} p={"1rem"}>
        <code>
          Hello From Dharmik Puri Goswami
        </code>
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