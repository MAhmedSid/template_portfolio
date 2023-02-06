import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  return (
    <Card boxShadow="dark-lg" borderRadius="xl" bgColor={"#251D3A"} textColor={"aliceblue"}>
      <Image
        src={imageSrc}
        objectFit="fill"
        borderBottomRadius="2xl"
        borderTopRadius="xl"
      ></Image>

      <CardBody>
        <Heading textColor={"#ECB365"}>{title}</Heading>
        <Text pt="5" fontSize="lg">
          {description}
        </Text>
      </CardBody>
      <CardFooter>
        <a href="#">
          <HStack _hover={{ textColor: "#ECB365" }}>
            <Text fontSize="md" as="b">
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Cards;
