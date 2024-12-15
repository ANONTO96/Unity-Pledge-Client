import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='lg:w-[90%] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
