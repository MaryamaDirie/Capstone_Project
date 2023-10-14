import React from "react";
import { Avatar, Heading, VStack,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nadaara!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const nadaara_pic = "./nadaara.jpeg"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Profile = () => {
  return (
    <VStack>
      <Avatar name="Mohamed Abdirahman" src={nadaara_pic} />
      <Text>{ greeting}</Text>
      <Heading>{ bio1}</Heading>
      <Heading>{ bio2}</Heading>
    </VStack>
  );
};
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Profile/>
  </FullScreenSection>
);

export default LandingSection;
