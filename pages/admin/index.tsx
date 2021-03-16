import useSWR from 'swr'
import axios from 'axios'
import nookies from 'nookies'
import Layout from '../../components/layouts/AdminLayout'
import Sidebar from '../../components/Sidebar/Sidebar'
import firebase from '../../config/firebase'
import verifyToken from '../../utils/verifyToken'

export default function Index() {
  return(
    <>
      <Layout>
        <Sidebar />
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
  const result = verifyToken(access_token)
  console.log(result)
  return {
    props: {}, // will be passed to the page component as props
  }
}
