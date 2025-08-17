import { Outlet } from 'react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <main><Outlet /></main>
        <Footer />
    </div>
  )
}

export default MainLayout