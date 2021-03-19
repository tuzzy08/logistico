import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  Badge,
  Stack,
  Flex,
  Text,
  Box,
  HStack
} from '@chakra-ui/react'

export default function DeliveriesTable() {
  return (
    <>
      <Box ml={{ md: '200px', }}  maxW='900px' borderWidth='1px' boxShadow='sm'>
        <Table variant="simple">
        <TableCaption placement='top'><Text fontWeight='bold' fontSize='x-large'>Latest Deliveries</Text></TableCaption>
        <Thead>
          <Tr>
            <Th><Text fontWeight="bold">Item Description</Text></Th>
            <Th><Text fontWeight="bold">Recipient</Text></Th>
            <Th><Text fontWeight="bold">Assigned to</Text></Th>
            <Th><Text fontWeight="bold">Delivery address</Text></Th>
            <Th><Text fontWeight="bold">status</Text></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              {/* <Flex spacing='25px'> */}
                <Text>Food Items</Text>              
              {/* </Flex> */}
            </Td>
            <Td>
              <Text>Janeth Williams</Text>              
            </Td>
            <Td>
              <HStack spacing='10px'><Avatar src='' bg='teal.500' size='xs' /><Text>Andy Yellow</Text></HStack>
            </Td>
            <Td>            
              <Badge ml="1" colorScheme="green">Delivered</Badge>
            </Td>
            <Td>            
              <Text>4 street road</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              {/* <Flex spacing='25px'> */}
                <Text>Laundry items</Text>              
              {/* </Flex> */}
            </Td>
            <Td>
              <Text>Samuel Jack</Text>              
            </Td>
            <Td>
              <HStack spacing='10px'><Avatar src='' bg='teal.500' size='xs' /><Text>Frank Edward</Text></HStack>
            </Td>
            <Td>            
              <Badge ml="1" colorScheme="yellow">In transit</Badge>
            </Td>
            <Td>            
              <Text>4 street road</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              {/* <Flex spacing='25px'> */}
                <Text>Documents</Text>              
              {/* </Flex> */}
            </Td>
            <Td>
              <Text>Red star express</Text>              
            </Td>
            <Td>
              <HStack spacing='10px'><Avatar src='' bg='teal.500' size='xs' /><Text>Daniel Frank</Text></HStack>
            </Td>
            <Td>            
              <Badge ml="1" colorScheme="green">Delivered</Badge>
            </Td>
            <Td>            
              <Text>4 street road</Text>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          {/* <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr> */}
        </Tfoot>
      </Table>
      </Box>
    </>
  )
}