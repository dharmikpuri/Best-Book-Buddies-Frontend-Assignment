import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SVG from "../../assets/SVG.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const UITemplates = () => {
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
    <Box w={{base:"100%",md:"90%",lg:"90%"}} m={"auto"} mt={"5rem"} data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">

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