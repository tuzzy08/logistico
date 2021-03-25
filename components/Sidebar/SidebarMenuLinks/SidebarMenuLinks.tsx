import NextLink from 'next/link'
import { Link, Icon } from '@chakra-ui/react'

interface Props {
  title: string
  href: string
  icon: any
}

export default function SubMenuLink({ title, href, icon }: Props) {
  return (
    // <Flex
    // _hover={{
    //   color: '#e6cb2d',
    //   textDecoration: 'none',
    //   bg: 'black',
    //   cursor: 'pointer'
    // }}
    // >
    <NextLink href={href} passHref>
      <Link
        px={4}
        py={3}
        rounded={"sm"}
        textAlign="justify"
        fontFamily="body"
        fontSize="md"
        fontWeight="semibold"
        textTransform="capitalize"
        color="black"
        _hover={{
          color: "#e6cb2d",
          textDecoration: "none",
          bg: "black",
        }}
        _focus={{
          outline: "none",
        }}
      >
        <Icon as={icon} mx="5px" my="4px" />
        {/* <Flex w='15px' h='27px'ml='7px'></Flex> */}
        {title}
      </Link>
    </NextLink>
    // </Flex>
  );
}
