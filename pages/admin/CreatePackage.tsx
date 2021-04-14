import { Flex } from '@chakra-ui/react'
import NewPackageTabs from '../../components/Tabs'
import AdminLayout from '../../components/layouts/adminLayout/AdminLayout'
import Sidebar from '../../components/Sidebar'

export default function CreatePackage() {
  return (
    <>
      <AdminLayout photoURL="" displayName="">
        <Flex align="flex-start">
          <Sidebar />
          <NewPackageTabs />
        </Flex>
      </AdminLayout>
    </>
  )
}
