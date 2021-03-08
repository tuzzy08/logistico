import { Link, Box, Center, useColorModeValue, Text } from '@chakra-ui/react';

export default function SubMenuLink({title, href}) {
  return (
    
      <Link
      href={href}
      px={4}
      py={3}
      rounded={'sm'}
      textAlign='center'
      fontFamily='body'
      fontSize='md'
      fontWeight='semibold'
      textTransform='capitalize'
      color='white'
      _hover={{       
        color: '#1C4532',
        textDecoration: 'none',
        bg: '#C6F6D5',
      }}     
      >
      {title}
      </Link>
  )
}