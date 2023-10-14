import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack rounded={"xl"} backgroundColor={"white"} align={"start"}>
        <Image rounded={"xl"} src={imageSrc} alt={title} />

        <Heading paddingTop={".3rem"} paddingLeft={".4rem"} color={"black"}>
          {title}
        </Heading>
        <Text paddingLeft={".6rem"} color={"#7D7C7C"}>
          {description}
        </Text>
        <Text paddingBottom={".6rem"}  paddingLeft={".4rem"} color={"black"} href="">
          <a href="">
            see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Text>
      </VStack>
    </HStack>
  );
};

export default Card;
