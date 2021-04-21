import { useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Container,
  // Flex,
  Input,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
} from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import MainLayout from '../components/layouts/frontLayout/MainLayout'

export default function requestDispatch() {
  const [tabIndex, setTabIndex] = useState(0)
  // const [formData, setformData] = useState({})
  // const onInputChange = () => {
  //   setformData()
  // }
  const handleNextButtonClick = (event) => {
    event.preventDefault()
    setTabIndex((currentIndex) => currentIndex + 1)
  }
  const handleBackButtonClick = (event) => {
    event.preventDefault()
    setTabIndex((currentIndex) => currentIndex - 1)
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <>
      <MainLayout>
        <Divider />
        <Container mt="70px" maxW="2xl">
          <Stack borderRadius="md" borderWidth="1px" padding="7px">
            <Tabs
              index={tabIndex}
              onChange={handleTabsChange}
              variant="enclosed-colored"
              isFitted
              // colorScheme="green"
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
                  {/* Sender Details */}
                  <Box as="form" paddingTop="20px">
                    <Stack spacing={4}>
                      <Input
                        isRequired
                        placeholder="Full Name"
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
                      // w="sm"
                      bgGradient="linear(to-r, red.400,pink.400)"
                      color="white"
                      onClick={handleNextButtonClick}
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
                  {/* Item Details */}
                  <Box as="form" paddingTop="20px">
                    <Stack spacing={4}>
                      <Input
                        isRequired
                        placeholder="Item Name"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        _placeholder={{
                          color: 'gray.500',
                        }}
                      />
                      <Textarea placeholder="Description" />
                    </Stack>
                    {/* <Stack direction="row" spacing={4}>
                      <Button
                        // variant="outline"
                        colorScheme="pink"
                        fontFamily="heading"
                        mt={8}
                        w="full"
                        color="white"
                        // onClick={handleNextButtonClick}
                        leftIcon={<ArrowLeftIcon />}
                      >
                        Back
                      </Button>
                      <Button
                        fontFamily="heading"
                        mt={8}
                        w="full"
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color="white"
                        onClick={handleNextButtonClick}
                        _hover={{
                          bgGradient:
                            'linear(to-r, red.400,pink.400)',
                          boxShadow: 'xl',
                        }}
                      >
                        Next
                      </Button>
                    </Stack> */}
                    <ButtonGroup variant="outline" spacing="6" mt={8}>
                      <Button
                        colorScheme="pink"
                        leftIcon={<ArrowLeftIcon />}
                        onClick={handleBackButtonClick}
                      >
                        Back
                      </Button>
                      <Button
                        color="white"
                        bgGradient="linear(to-r, red.400,pink.400)"
                        // w="sm"
                        onClick={handleNextButtonClick}
                        _hover={{
                          bgGradient:
                            'linear(to-r, red.400,pink.400)',
                          boxShadow: 'xl',
                        }}
                      >
                        Next
                      </Button>
                    </ButtonGroup>
                  </Box>
                </TabPanel>
                <TabPanel>
                  {/* Receiver Details */}
                  <Box as="form" paddingTop="20px">
                    <Stack spacing={4}>
                      <Input
                        isRequired
                        placeholder="Full Name"
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
                    <ButtonGroup variant="outline" spacing="6" mt={8}>
                      <Button
                        colorScheme="pink"
                        leftIcon={<ArrowLeftIcon />}
                        onClick={handleBackButtonClick}
                      >
                        Back
                      </Button>
                      <Button
                        color="white"
                        bgGradient="linear(to-r, red.400,pink.400)"
                        // w="sm"
                        // onClick={handleNextButtonClick}
                        _hover={{
                          bgGradient:
                            'linear(to-r, red.400,pink.400)',
                          boxShadow: 'xl',
                        }}
                      >
                        Submit
                      </Button>
                    </ButtonGroup>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Container>
      </MainLayout>
    </>
  )
}
