import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Facilities = () => {
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
        <Box w={"80%"} m={"auto"} mt={"5rem"} data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
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