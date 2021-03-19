import AdminLayout from '../../components/layouts/AdminLayout'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Flex, Stack, Box, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'

export default function CreatePackage() {
  return (
    <>
      <AdminLayout photoURL={''} displayName={''} >
        <Flex align='flex-start'>
          <Sidebar />
        </Flex>
      </AdminLayout>
    </>
  )
}