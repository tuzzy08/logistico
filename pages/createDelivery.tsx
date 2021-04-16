import {
  Box,
  Button,
  Divider,
  Container,
  Input,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
} from '@chakra-ui/react'
import MainLayout from '../components/layouts/frontLayout/MainLayout'

export default function createDelivery() {
  return (
    <>
      <MainLayout>
        <Divider />
        <Container mt="70px">
          <Stack
            spacing={5}
            borderRadius="md"
            borderWidth="1px"
            padding="7px"
          >
            <Tabs
              variant="soft-rounded"
              colorScheme="green"
              mt="5px"
              padding="7px"
            >
              <TabList>
                <Tab>Sender Details</Tab>
                <Tab>Item Details</Tab>
                <Tab>Receiver Details</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box as="form">
                    <Stack spacing={4}>
                      <Input
                        placeholder="First Name"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        _placeholder={{
                          color: 'gray.500',
                        }}
                      />
                      <Input
                        placeholder="Last Name"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        _placeholder={{
                          color: 'gray.500',
                        }}
                      />
                      <Input
                        placeholder="Phone"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        _placeholder={{
                          color: 'gray.500',
                        }}
                      />
                      <Textarea placeholder="Address" />
                    </Stack>
                    <Button
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
                      Next
                    </Button>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Container>
      </MainLayout>
    </>
  )
}
