import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-800 px-4 py-6 text-white sm:px-8 lg:px-[8%]'>
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  )
}

export default App