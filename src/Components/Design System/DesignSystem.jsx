import {
  Box,
  Button,
  Divider,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import videoPlay from "../../assets/videoPlay.png";
import redHeart from "../../assets/redheart.svg";
import eye from "../../assets/eye.svg";
import editPen from "../../assets/editPen.svg";
import attachment from "../../assets/attachment.svg";
import pause from "../../assets/pause.svg";
import download from "../../assets/download.svg";
import girlicon from "../../assets/girl.png";
import plus from "../../assets/plus.svg";
import message from "../../assets/message.svg";
import delta from "../../assets/delta.png";
import deltagirl from "../../assets/deltagirl.svg";
import blackheart from "../../assets/blackheart.svg";
import editblack from "../../assets/editblack.svg";
import greyeye from "../../assets/eyegrey.svg";
import msggrey from "../../assets/greymessag.svg";
const circlrRow = [
  { icon: redHeart },
  { icon: eye },
  { icon: editPen },
  { icon: attachment },
  { icon: pause },
  { icon: download },
];
const DesignSystem = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box w={"90%"} m={"auto"} mt={"10rem"} mb={"3rem"}>
      <Text
        fontWeight={500}
        fontSize={{ base: "2.8rem", md: "3.25rem", lg: "3.5rem" }}
        fontFamily={"Roboto"}
        textAlign={"center"}
        color={"#000000"}
        mb={{ base: "0.5rem", md: "1rem", lg: "0rem" }}
      >
        Design System for React JS
      </Text>

      <Text
        fontWeight={400}
        fontSize={{ base: "1rem", md: "1.25rem", lg: "1.1rem" }}
        fontFamily={"Roboto"}
        textAlign={"center"}
        lineHeight={"2rem"}
        color={"#505256"}
        w={{ base: "90%", md: "80%", lg: "45%" }}
        m={"auto"}
      >
        Atomize React is a UI framework that helps developers collaborate with
        designers and build consistent user interfaces effortlessly.
      </Text>

      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        w={{ base: "90%", md: "50%", lg: "30%" }}
        m={"auto"}
        mt={"2rem"}
        flexDir={{ base: "column", md: "row" }}
        gap={"1rem"}
      >
        <Button
          bg={"#0284FE"}
          color={"#FFF"}
          py={"1.5rem"}
          px={"2rem"}
          borderRadius={"0.5rem"}
          _hover={{ bg: " #0284FE", boxShadow: "0 0 20px 5px #1873c8" }}
        >
          Get Started Now
        </Button>

        <Button
          border={"1px solid #d4d7da"}
          p={"12px, 36.25px, 12px, 36px"}
          borderRadius={"0.5rem"}
          color={"#505256"}
          py={"1.5rem"}
          px={"2rem"}
          bg={"#FFF"}
          _hover={{ bg: " #FFF", boxShadow: "0 0 20px 5px #cac6c6" }}
        >
          Watch Now
        </Button>
      </Box>
      <Box
        display={"flex"}
        gap={"5rem"}
        w={"90%"}
        m={"auto"}
        mt={"5rem"}
        flexDir={{base:"column",md:"row"}}
        // border={"2px solid red"}
      >
        <Box w={{base:"100%",md:"50%",lg:"30%"}} display={"flex"} gap={8} flexDirection={"column"}   
        // border={"2px solid black"}
        >
          {/* BOX For Showing Icons  */}
          <Box
            p={"0px, 14px, 0px, 0px"}
            display={"flex"}
            className="circle-row"
            gap={4}
            justifyContent={"center"}
          >
            {circlrRow.map((row, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="50px"
                h="50px"
                boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
                borderRadius="50%"
                overflow="hidden"
              >
                <Image src={row.icon} alt="rec" />
              </Box>
            ))}
          </Box>
           
           {/* Box 1  */}
          <Box
            display={"flex"}
            borderRadius={"12px"}
            border={"1px #F7F8F9"}
            p={"25px"}
            className="card-1"
            h={"90%"}
            boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"auto"}
              flexDirection={"column"}
            >
              <Image
                w={"72px"}
                h={"72px"}
                borderRadius={"50%"}
                src={girlicon}
              />
              <Text
                mt={"0.75rem"}
                fontWeight={500}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
                fontFamily={"Roboto"}
                color={"#000"}
              >
                Meagan Fisher
              </Text>
              <Text
                mb={"2rem"}
                fontWeight={400}
                fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                fontFamily={"Roboto"}
                color={"#000"}
              >
                Engineering Manager
              </Text>
            </Box>
            <Box
              display={"flex"}
              gap={6}
              p={"8px, 16px, 8px, 16px"}
              mt={"2rem"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Button
                bg={"#0284FE"}
                color={"#FFF"}
                py={"1.5rem"}
                px={"2rem"}
                borderRadius={"1.5rem"}
                rightIcon={<Image src={plus} />}
                _hover={{ bg: " #0284FE", boxShadow: "0 0 20px 5px #1873c8" }}
              >
                Follow
              </Button>

              <Button
                border={"1px solid #d4d7da"}
                p={"12px, 36.25px, 12px, 36px"}
                borderRadius={"1.5rem"}
                color={"#505256"}
                py={"1.5rem"}
                px={"2rem"}
                bg={"#FFF"}
                rightIcon={<Image src={message} />}
                _hover={{ bg: " #FFF", boxShadow: "0 0 20px 5px #c6c2c2" }}
              >
                Message
              </Button>
            </Box>
          </Box>
          
        </Box>
        {/* BOX 2  */}
        <Box
          w={"30%"}
          display={{base:"none",md:"none",lg:"flex"}}
          gap={8}
          flexDirection={"column-reverse"}
        >
          <Box
            p={"16px"}
            display={"flex"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row" }}
            boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
            borderRadius={"12px"}
            border={"1px #F7F8F9"}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1.5}
            >
              <Image
                src={deltagirl}
                boxSize="40px"
                objectFit="cover"
                borderRadius="full"
              />
              <Text
                fontWeight="bold"
                fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                fontFamily="Roboto"
                color="#000"
              >
                Meagan Fisher
              </Text>
            </Box>
            <Image src={editblack} alt="de" />
          </Box>

          <Box
            display={"flex"}
            borderRadius={"12px"}
            border={"1px #F7F8F9"}
            className="card-2"
            boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
            flexDirection={"column"}
          >
            <Image src={delta} alt="de" />
            <Box
              p={"16px"}
              display={"flex"}
              justifyContent={"space-between"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1.5}
              >
                <Image
                  src={deltagirl}
                  boxSize="40px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                  fontFamily="Roboto"
                  color="#000"
                >
                  Meagan Fisher
                </Text>
              </Box>
              <Image
                cursor={"pointer"}
                onClick={() => setToggle(!toggle)}
                src={toggle ? redHeart : blackheart}
                alt="de"
              />
            </Box>
          </Box>
        </Box>

        {/* BOX 3  */}
        <Box
          display={"flex"}
          borderRadius={"12px"}
          border={"1px #F7F8F9"}
          p={{base:"10px",md:"15px",lg:"30px"}}
          className="card-1"
          h={"100%"}
          w={{base:"100%",md:"100%",lg:"30%"}}
          flexGrow={1}
          boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            m={"auto"}
            flexDirection={"column"}
            // border={"1px solid red"}
          >
            <Text
              mt={"0.75rem"}
              fontWeight={500}
              fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.5rem" }}
              fontFamily={"Roboto"}
              color={"#000"}
            >
              Login into your account
            </Text>
            <Text
              mb={"2rem"}
              fontWeight={400}
              fontSize={{ base: "1rem", md: "1rem", lg: "0.9rem" }}
              fontFamily={"Roboto"}
              color={"#000"}
              display={"flex"}
              gap={0.5}
            >
              Don't have an account yet?
              <Text
                mb={"2rem"}
                fontWeight={400}
                fontSize={{ base: "1rem", md: "1rem", lg: "0.9rem" }}
                fontFamily={"Roboto"}
                color={"#0284FE"}
              >
                Create New
              </Text>
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={5}>
            <InputGroup size="md" borderRadius={"1.5rem"}>
              <Input borderRadius={"1.5rem"} pr="4.5rem" type={"text"} placeholder="johndoe@gmail.com" />
              <InputRightElement width="4.5rem">
                <Image src={msggrey} alt="de" />
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md" borderRadius={"1.5rem"}>
              <Input borderRadius={"1.5rem"} pr="4.5rem" type={"text"} placeholder="Enter password" />
              <InputRightElement width="4.5rem">
                <Image src={greyeye} alt="de" />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            mt={"6rem"}
            bg={"#EEF7FF"}
            color={"#0284FE"}
            py={"1.5rem"}
            px={"2rem"}
            borderRadius={"1.5rem"}
            _hover={{ bg: " #EEF7FF", boxShadow: "0 0 20px 5px #c0ccd6" }}
          >
            Login
          </Button>



        </Box>
      </Box>
    </Box>
  );
};

export default DesignSystem;
