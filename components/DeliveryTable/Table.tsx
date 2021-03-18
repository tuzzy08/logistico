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
  Text
} from '@chakra-ui/react'

export default function DeliveriesTable() {
  return (
    <Table variant="simple">
      <TableCaption placement='top'><Text fontWeight='bold' fontSize='x-large'>Latest Deliveries</Text></TableCaption>
      <Thead>
        <Tr>
          <Th><Text fontWeight="bold">Item Description</Text></Th>
          <Th><Text fontWeight="bold">Recipient</Text></Th>
          <Th><Text fontWeight="bold">Assigned to</Text></Th>
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
            <Flex justify='space-between'><Avatar src='' bg='teal.500' size='xs' /><Text>Andy Yellow</Text></Flex>
          </Td>
          <Td>            
            <Badge ml="1" colorScheme="green">Delivered</Badge>
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
            <Flex justify='space-between'><Avatar src='' bg='teal.500' size='xs' /><Text>Frank Edward</Text></Flex>
          </Td>
          <Td>            
            <Badge ml="1" colorScheme="yellow">In transit</Badge>
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
            <Flex justify='space-between'><Avatar src='' bg='teal.500' size='xs' /><Text>Daniel Frank</Text></Flex>
          </Td>
          <Td>            
            <Badge ml="1" colorScheme="green">Delivered</Badge>
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
  )
}