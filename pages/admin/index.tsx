import useSWR from 'swr'
import axios from 'axios'
import nookies from 'nookies'
import Layout from '../../components/layouts/AdminLayout'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/Card';
import firebase from '../../config/firebase'
import verifyToken from '../../utils/api/verifyToken'
import { Flex, HStack } from '@chakra-ui/react'
import DeliveriesTable from '../../components/DeliveryTable/Table'

export default function Index({ photoURL, displayName, signedIn}) {
  return(
    <>
      <Layout photoURL={photoURL} displayName={displayName}>
        <HStack spacing='40px'>
        <Sidebar />
        <DeliveriesTable />
        {/* <Card/> */}
        </HStack>        
      </Layout>
    </>
  )
}

const fetcher = async () => {
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3000/api/getToken',
    data: {},
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function getServerSideProps(context) {  
  const { access_token } = nookies.get(context)
  if(!access_token) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  const { photoURL, displayName } = verifyToken(access_token)
  return {
    props: {photoURL, displayName }, // will be passed to the page component as props
  }
}
