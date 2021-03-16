import { Link, Box, Flex, Center, useColorModeValue, Text, HStack } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react"


export default function SubMenuLink({title, href, icon}) {
  return (
    // <Flex
    // _hover={{       
    //   color: '#e6cb2d',
    //   textDecoration: 'none',
    //   bg: 'black',
    //   cursor: 'pointer'
    // }}
    // >
            
      <Link
        href={href}
        px={4}
        py={3}
        rounded={'sm'}
        textAlign='justify'
        fontFamily='body'
        fontSize='md'
        fontWeight='semibold'
        textTransform='capitalize'
        color='black'
        _hover={{       
          color: '#e6cb2d',
          textDecoration: 'none',
          bg: 'black',
        }}>
          <Icon as={icon} mx='5px' my='4px' />
          {/* <Flex w='15px' h='27px'ml='7px'></Flex> */}
        {title}
      </Link>
    // </Flex>
  )
}