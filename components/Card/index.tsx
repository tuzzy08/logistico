import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function Card() {
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">Plus</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Verified &bull; Location
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Item Name
      </Text>
      <Text mt={2}>$Shipping Sprice</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  )
}
