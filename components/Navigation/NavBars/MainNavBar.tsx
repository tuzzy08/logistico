/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  // HamburgerIcon,
  // CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
// import { FaGoogle } from 'react-icons/fa'
// import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import NavBarIcon from '../NavBarIcon'
import ActionButtons from '../ActionButtons'
// import useAuth from '../../../hooks/useAuth'

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Find Service',
    // children: [
    //   {
    //     label: 'Dispatch Riders',
    //     subLabel: 'Find a dispatch service near you',
    //     href: '#',
    //   },
    //   {
    //     label: 'Cargo Services',
    //     subLabel: 'Find a cargo service near',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
]

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => (
  <Link
    href={href}
    role="group"
    display="block"
    p={2}
    rounded="md"
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
  >
    <Stack direction="row" align="center">
      <Box>
        <Text
          transition="all .3s ease"
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}
        >
          {label}
        </Text>
        <Text fontSize="sm">{subLabel}</Text>
      </Box>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify="flex-end"
        align="center"
        flex={1}
      >
        <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
)

const DesktopNav = () => (
  <Stack direction="row" spacing={4}>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label}>
        <Popover trigger="hover" placement="bottom-start">
          <PopoverTrigger>
            <Link
              p={2}
              href={navItem.href || '#'}
              fontSize="sm"
              fontWeight={500}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'none',
                color: useColorModeValue('gray.800', 'white'),
              }}
            >
              {navItem.label}
            </Link>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow="xl"
              bg={useColorModeValue('white', 'gray.800')}
              p={4}
              rounded="xl"
              minW="sm"
            >
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    ))}
  </Stack>
)

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href || '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0!important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = () => (
  // TODO: Add action buttons to mobile view
  <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={4}
    display={{ md: 'none' }}
  >
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
)

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  // const { signInWithGoogle } = useAuth()
  return (
    // Creates a sticky navigation bar
    <Box position="sticky" top="0" zIndex="sticky">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <NavBarIcon onToggle={onToggle} isOpen={isOpen} />
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Text
            textAlign={useBreakpointValue({
              base: 'center',
              md: 'left',
            })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <ActionButtons />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}
