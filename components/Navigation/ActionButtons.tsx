import { Stack, Icon, Button } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function ActionButtons() {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify="flex-end"
      direction="row"
      spacing={6}
    >
      <ColorModeSwitcher justifySelf="flex-end" />
      <Button
        display={{ md: 'inline-flex' }}
        fontSize="sm"
        variant="outline"
        fontWeight={600}
        borderColor="green.400"
        // color="white"
        _hover={{
          bg: 'green.300',
          color: 'white',
        }}
        // onClick={signInWithGoogle}
      >
        Create account
        {/* <Icon as={FaGoogle} mx="5px" /> */}
      </Button>
      <Button
        type="submit"
        display={{ md: 'inline-flex' }}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="green.400"
        // onClick={signInWithGoogle}
      >
        Sign in with
        <Icon as={FaGoogle} mx="5px" />
      </Button>
    </Stack>
  )
}
