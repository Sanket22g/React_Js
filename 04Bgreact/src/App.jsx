import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const colors = ['olive', 'red', 'green', 'orange']

const pages = { Home, About, Projects, Contact }

function App() {
  const [color, setColor] = useState('olive')
  const [active, setActive] = useState('Home')

  const PageComponent = pages[active]

  return (
    <>
      <div
        className='w-full h-screen'
        style={{ backgroundColor: color, transition: 'background-color 0.3s ease' }}
      >
        {/* Color Picker — Top */}
        <div className='fixed flex justify-center top-4 inset-x-0 z-50'>
          <div className='jelly-float flex gap-3 p-3 bg-white shadow-lg rounded-3xl'>
            <button onClick={() => setColor('red')} className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer'>Red</button>
            <button onClick={() => setColor('green')} className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer'>Green</button>
            <button onClick={() => setColor('orange')} className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer'>Orange</button>
            <button onClick={() => setColor('olive')} className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer'>Olive</button>
            <button onClick={() => setColor('#6366f1')} className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer'>Indigo</button>
          </div>
        </div>

        {/* Page Content */}
        <PageComponent />

        {/* Navbar — Bottom */}
        <Navbar active={active} setActive={setActive} />
      </div>
    </>
  )
}

export default App
