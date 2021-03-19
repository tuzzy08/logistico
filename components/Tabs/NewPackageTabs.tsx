import { Center, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text} from '@chakra-ui/react'

export default function NewPackageTabs() {
  return (
    <>
      <Box ml={{ md: '200px', }} borderWidth='1px' w='500px' mt='50px' boxShadow="md" p="6" rounded="md">
        <Center><Text>Create new package</Text></Center>
        <Box mt='20px'>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Step one</Tab>
              <Tab>Step two</Tab>
              <Tab>Submit</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p></p>
              </TabPanel>
              <TabPanel>
                <p></p>
              </TabPanel>
              <TabPanel>
                <p></p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  )
}