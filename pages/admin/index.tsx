// import axios from 'axios'
import { Flex } from '@chakra-ui/react'
import nookies from 'nookies'
import Sidebar from '../../components/Sidebar'
import verifyToken from '../../utils/api/verifyToken'
import Layout from '../../components/layouts/adminLayout/AdminLayout'
import DeliveriesTable from '../../components/DeliveryTable/index'

interface Props {
  photoURL: string
  displayName: string
}

export default function Index({ photoURL, displayName }: Props) {
  return (
    <>
      <Layout photoURL={photoURL} displayName={displayName}>
        {/* <HStack spacing='40px'> */}
        <Flex w="100%" align="flex-start">
          <Sidebar />
          <DeliveriesTable />
          {/* <Card/> */}
          {/* </HStack>         */}
        </Flex>
      </Layout>
    </>
  )
}

// const fetcher = async () => {
//   const { data } = await axios({
//     method: 'post',
//     url: 'http://localhost:3000/api/getToken',
//     data: {},
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// }

export async function getServerSideProps(context) {
  const { accessToken } = nookies.get(context)
  if (!accessToken) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  const { photoURL, displayName } = verifyToken(accessToken)
  return {
    props: { photoURL, displayName }, // will be passed to the page component as props
  }
}
