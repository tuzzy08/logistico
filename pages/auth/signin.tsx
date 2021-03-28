/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

export default function SignIn() {
  const { signInWithGoogle } = useAuth()
  const { handleSubmit } = useForm()
  const onSubmit = () => signInWithGoogle()
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool{' '}
            <Link color="blue.400">features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl> */}
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align="start"
                  justify="space-between"
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color="blue.400">Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
