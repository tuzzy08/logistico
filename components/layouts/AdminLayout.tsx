import { ReactNode } from 'react';
import useAuth from '../../hooks/useAuth'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Packages', 'Reports', 'Support'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    href={'#'}>
    {children}
  </Link>
);

export default function AdminLayout({ children, photoURL, displayName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signOut } = useAuth()

  return (
    <>
      <Box bg={'black'} px={4} color='white'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              bg='#e6cb2d'
              color='black'
              // colorScheme={'#e6cb2d'}
              size={'sm'}
              mr={4}
              >
              {displayName}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={ photoURL }
                />
              </MenuButton>
              <MenuList bg='black'>
                {/* // TODO: Pass the hover effect as a group */}
                <MenuItem _hover={{ bg: 'white', color: 'black'}}>My Account</MenuItem>
                <MenuItem _hover={{ bg: 'white', color: 'black'}}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem _hover={{ bg: 'white', color: 'black'}} onClick={() => signOut()} >Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Flex p={6}>{children}</Flex>
    </>
  );
}