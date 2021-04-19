import { useState } from 'react'
import {
  // Box,
  Stack,
  // Select,
  // Heading,
  // Text,
  // Container,
  // Input,
  // Button,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
} from '@chakra-ui/react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'

interface Item {
  label: string
  value: string
}

const areas = [
  { value: 'dLine', label: 'DLine' },
  { value: 'trans-amadi', label: 'Trans-Amadi' },
  { value: 'ogbum-nu-abali', label: 'Ogbum-nu-abali' },
  { value: 'peter-odili', label: 'Peter Odili' },
  { value: 'new-g-r-a', label: 'New G.R.A' },
  { value: 'old-g-r-a', label: 'Old G.R.A' },
  { value: 'stadium-road', label: 'Stadium Road' },
]

export default function DispatchForm() {
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  // eslint-disable-next-line no-shadow
  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems)
    }
  }
  return (
    <>
      <Stack>
        <CUIAutoComplete
          label="Choose drop-off locations"
          placeholder="Type an area"
          items={areas}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </Stack>
      {/* <Container>
        <Box as="form" mt={10}>
          <Select
            variant="filled"
            placeholder="Select drop-off location"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box> */}
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
      {/* </Container> */}
    </>
  )
}
