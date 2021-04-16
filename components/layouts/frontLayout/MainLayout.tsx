import { Flex } from '@chakra-ui/react'
import MainNavBar from '../../Navigation/NavBars/MainNavBar'
// import Footer from '../../Footer'

type props = any

export default function MainLayout({ children }: props) {
  return (
    <Flex direction="column">
      <MainNavBar />
      {children}
      {/* <Box marginBottom="0">
        <Footer />
      </Box> */}
    </Flex>
  )
}
