import MainNavBar from "../../Navigation/NavBars/MainNavBar"
import Footer from '../../Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavBar />
      {children}
      <Footer />
    </>
  )
}