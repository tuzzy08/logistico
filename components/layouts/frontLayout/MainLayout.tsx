import MainNavBar from '../../Navigation/NavBars/MainNavBar'
import Footer from '../../Footer'

type props = any

export default function MainLayout({ children }: props) {
  return (
    <>
      <MainNavBar />
      {children}
      <Footer />
    </>
  )
}
