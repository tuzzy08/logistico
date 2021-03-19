import { Flex, Stack, Box, } from '@chakra-ui/react'
import NewPackageTabs from '../../components/Tabs/NewPackageTabs'
import AdminLayout from '../../components/layouts/AdminLayout'
import Sidebar from '../../components/Sidebar/Sidebar'


export default function CreatePackage() {
  return (
    <>
      <AdminLayout photoURL={''} displayName={''} >
        <Flex align='flex-start'>
          <Sidebar />
          <NewPackageTabs />
        </Flex>
      </AdminLayout>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      
    }
  }
}