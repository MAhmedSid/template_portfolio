import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Text,
  Image,
  Stack,
  Box,
  Fade
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bio from "../images/bio.png";
import "animate.css"
import profileImg from "../images/profile.jpeg"

const greeting = "Hi, I'm !";
const bio1 = "Frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#121212"
  >
    <Stack mt="52" direction="row">
      <Fade in={true}>
      <Box boxSize="xl">
        <Image className="animate__animated animate__flipInY animate__delay-1s" boxShadow="dark-lg" src={bio} alt="img"></Image>
      </Box>
      </Fade>
      <VStack spacing={8} maxW="600px">
        <Avatar  size="2xl" name="Pete" src={profileImg} />
        <VStack alignItems="flex-start">
          <Text textColor={"#9CA3AF"} fontSize="xl" as="h2" size="md">
            {greeting}
          </Text>
          <Heading  textColor={"#ECB365"} as="h2" size="2xl">
            M.Ahmed Siddiqui
          </Heading>
          <Heading textColor={"#D1D5DB"} fontSize="3xl" as="h2" size="2xl">
            {bio1}
          </Heading>
          <Text textColor={"#9CA3AF"} fontSize="2xl" as="h2" size="2xl">
            {bio2}
          </Text>
          <Text textColor={"#9CA3AF"} noOfLines={4}>
            "I am a skilled React and Front End Developer with experience
            working with a variety of UI libraries. I have a passion for
            creating visually stunning and intuitive web applications and
            delivering high-quality results."
          </Text>
        </VStack>
      </VStack>
    </Stack>
  </FullScreenSection>
);
export default LandingSection;
