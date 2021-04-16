import {
  Box,
  // Stack,
  Select,
  // Heading,
  // Text,
  Container,
  // Input,
  // Button,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
} from '@chakra-ui/react'

export default function CreateDispatchForm() {
  return (
    <>
      <Container>
        <Box as="form" mt={10}>
          <Select
            variant="filled"
            placeholder="Select drop-off location"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {/* <Stack>
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack> */}
          {/* <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+1 (___) __-___-___"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Button
                fontFamily="heading"
                bg="gray.200"
                color="gray.800"
              >
                Upload CV
              </Button>
            </Stack> */}
          {/* <Button
            fontFamily="heading"
            mt={8}
            w="full"
            bgGradient="linear(to-r, red.400,pink.400)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, red.400,pink.400)',
              boxShadow: 'xl',
            }}
          >
            Submit
          </Button> */}
        </Box>
        {/* <Stack
          bg="gray.50"
          rounded="xl"
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color="gray.800"
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Join our team
              <Text
                as="span"
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text
              color="gray.500"
              fontSize={{ base: 'sm', sm: 'md' }}
            >
              We’re looking for amazing engineers just like you!
              Become a part of our rockstar engineering team and
              skyrocket your career!
            </Text>
          </Stack>
          form
        </Stack> */}
      </Container>
    </>
  )
}
